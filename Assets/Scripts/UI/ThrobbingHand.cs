using UnityEngine;
using UnityEngine.UI;

public class ThrobbingHand : MonoBehaviour
{
    [SerializeField] private float scaleSpeed = 2f;
    [SerializeField] private float scaleAmount = 0.2f;
    [SerializeField] private Button _button;
    [SerializeField] private TimeController _timeController;
    [SerializeField] private GameObject _pumpingButton;

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

    void Start()
    {
        startPos = transform.localPosition;
        startScale = transform.localScale;
    }

    void Update()
    {
        float scaleModifier = 1 + Mathf.Sin(Time.time * scaleSpeed) * scaleAmount;
        transform.localScale = startScale * scaleModifier;
    }

    private void Pumping()
    {
        _timeController.PlayGame();
        _timeController.DisableHintDisplay();
        _pumpingButton.gameObject.SetActive(false);
        gameObject.SetActive(false);
    }
}