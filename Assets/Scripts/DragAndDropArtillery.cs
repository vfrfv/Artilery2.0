using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

namespace DragAndDrop
{
    public class DragAndDropArtillery : MonoBehaviour, IBeginDragHandler, IEndDragHandler, IDragHandler
    {
        private readonly RaycastHit[] Hits = new RaycastHit[10];

        [SerializeField] private Image _spritArtillery;
        [SerializeField] private RidingHand[] _ridingHands;
        [SerializeField] private TimeController _timeController;

        [SerializeField] private Spawnlocation _spawnLocation;
        [SerializeField] private Spawnlocation _spawnLocation2;

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

        public void OnBeginDrag(PointerEventData eventData)
        {
            if (_isActive == false) return;

            _spritArtilleryInstance = Instantiate(_spritArtillery, _spritArtillery.transform.parent);
            _spritArtilleryInstance.gameObject.SetActive(true);

            if (_isReplay == false)
            {
                _spawnLocation.gameObject.SetActive(true);
            }
            else
            {
                _spawnLocation2.gameObject.SetActive(true);
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

                _spritArtilleryInstance.gameObject.SetActive(false);

                if (_isReplay == false)
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

        private bool FindSpawnLocation()
        {
            PointerEventData pointerData = new PointerEventData(EventSystem.current)
            {
                position = Input.mousePosition
            };

            List<RaycastResult> results = new List<RaycastResult>();

            GraphicRaycaster raycaster = GetComponentInParent<Canvas>().GetComponent<GraphicRaycaster>();
            raycaster.Raycast(pointerData, results);

            foreach (RaycastResult result in results)
            {
                if (result.gameObject.GetComponent<Spawnlocation>() != null)
                {
                    return true;
                }
            }

            return false;
        }

        private void TurnHands()
        {
            foreach (var hand in _ridingHands)
            {
                hand.gameObject.SetActive(false);
            }
        }
    }
}