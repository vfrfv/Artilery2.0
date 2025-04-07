using UnityEngine;

public class RidingHand : MonoBehaviour
{
	[SerializeField]
	private float _speed = 2f;

	[SerializeField]
	private float _height = 50f;

	private Vector3 _startPos;

	private void Start()
	{
		_startPos = base.transform.localPosition;
	}

	private void Update()
	{
		float newY = _startPos.y + Mathf.Sin(Time.time * _speed) * _height;
		base.transform.localPosition = new Vector3(_startPos.x, newY, _startPos.z);
	}
}
