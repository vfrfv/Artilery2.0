using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

namespace DragAndDrop
{
	public class DragAndDropArtillery : MonoBehaviour, IBeginDragHandler, IEventSystemHandler, IEndDragHandler, IDragHandler
	{
		private readonly RaycastHit[] Hits = new RaycastHit[10];

		[SerializeField]
		private Image _spritArtillery;

		[SerializeField]
		private RidingHand[] _ridingHands;

		[SerializeField]
		private TimeController _timeController;

		[SerializeField]
		private Spawnlocation _spawnLocation;

		[SerializeField]
		private Spawnlocation _spawnLocation2;

		private Camera _mainCamera;

		private Image _spritArtilleryInstance;

		private bool _isActive = false;

		private bool _isReplay = false;

		private void Awake()
		{
			_mainCamera = Camera.main;
		}

		public void Activate()
		{
			_isActive = true;
		}

		public void Deactivate()
		{
			_isActive = false;
		}

		public void OnBeginDrag(PointerEventData eventData)
		{
			if (_isActive)
			{
				_spritArtilleryInstance = Object.Instantiate(_spritArtillery, _spritArtillery.transform.parent);
				_spritArtilleryInstance.gameObject.SetActive(true);
				if (!_isReplay)
				{
					_spawnLocation.gameObject.SetActive(true);
				}
				else
				{
					_spawnLocation2.gameObject.SetActive(true);
				}
			}
		}

		public void OnDrag(PointerEventData eventData)
		{
			if (_spritArtillery != null)
			{
				_spritArtilleryInstance.transform.position = eventData.position;
			}
		}

		public void OnEndDrag(PointerEventData eventData)
		{
			if (FindSpawnLocation())
			{
				_timeController.PlayGame();
				_timeController.DisableHintDisplay();
				_spritArtilleryInstance.gameObject.SetActive(false);
				if (!_isReplay)
				{
					_spawnLocation.gameObject.SetActive(false);
				}
				else
				{
					_spawnLocation2.gameObject.SetActive(false);
				}
				TurnHands();
				_isReplay = true;
				_isActive = false;
			}
			_spritArtilleryInstance.gameObject.SetActive(false);
		}

		public void Location2()
		{
			_isReplay = true;
		}

		public void ResetDrag()
		{
			if (_spritArtilleryInstance != null)
			{
				Object.Destroy(_spritArtilleryInstance.gameObject);
				_spritArtilleryInstance = null;
			}
			if (!_isReplay)
			{
				_spawnLocation.gameObject.SetActive(false);
			}
			else if (_spawnLocation2 != null)
			{
				_spawnLocation2.gameObject.SetActive(false);
			}
		}

		private bool FindSpawnLocation()
		{
			PointerEventData pointerData = new PointerEventData(EventSystem.current)
			{
				position = Input.mousePosition
			};
			List<RaycastResult> results = new List<RaycastResult>();
			GraphicRaycaster raycaster = GetComponentInParent<Canvas>().GetComponent<GraphicRaycaster>();
			raycaster.Raycast(pointerData, results);
			foreach (RaycastResult item in results)
			{
				if (item.gameObject.GetComponent<Spawnlocation>() != null)
				{
					return true;
				}
			}
			return false;
		}

		private void TurnHands()
		{
			RidingHand[] ridingHands = _ridingHands;
			foreach (RidingHand hand in ridingHands)
			{
				hand.gameObject.SetActive(false);
			}
		}
	}
}
