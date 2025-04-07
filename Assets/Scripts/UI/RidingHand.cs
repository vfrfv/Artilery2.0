using UnityEngine;

public class RidingHand : MonoBehaviour
{
    [SerializeField] private float _speed = 2f;
    [SerializeField] private float _height = 50f;

    private Vector3 _startPos;

    void Start()
    {
        _startPos = transform.localPosition;
    }

    void Update()
    {
        float newY = _startPos.y + Mathf.Sin(Time.time * _speed) * _height;
        transform.localPosition = new Vector3(_startPos.x, newY, _startPos.z);
    }
}
