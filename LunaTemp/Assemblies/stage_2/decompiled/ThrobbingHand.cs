using UnityEngine;
using UnityEngine.UI;

public class ThrobbingHand : MonoBehaviour
{
	[SerializeField]
	private float scaleSpeed = 2f;

	[SerializeField]
	private float scaleAmount = 0.2f;

	[SerializeField]
	private Button _button;

	[SerializeField]
	private TimeController _timeController;

	[SerializeField]
	private GameObject _pumpingButton;

	private Vector3 startPos;

	private Vector3 startScale;

	private void OnEnable()
	{
		_button.onClick.AddListener(Pumping);
	}

	private void OnDisable()
	{
		_button.onClick.RemoveListener(Pumping);
	}

	private void Start()
	{
		startPos = base.transform.localPosition;
		startScale = base.transform.localScale;
	}

	private void Update()
	{
		float scaleModifier = 1f + Mathf.Sin(Time.time * scaleSpeed) * scaleAmount;
		base.transform.localScale = startScale * scaleModifier;
	}

	private void Pumping()
	{
		_timeController.PlayGame();
		_timeController.DisableHintDisplay();
		_pumpingButton.gameObject.SetActive(false);
		base.gameObject.SetActive(false);
	}
}
