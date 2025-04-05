using System;
using UnityEngine;
using UnityEngine.UI;

public class Timer : MonoBehaviour
{
    [SerializeField] private Text _timerText;
    [SerializeField] private GameObject _icons;

    private float _timeElapsed;
    private bool _isRunning = false;

    private bool _isPausing1 = false;
    private bool _isPausing2 = false;
    private bool _isPausing3 = false;

    public float TimeElapsed => _timeElapsed;

    public event Action StopVideo1;
    public event Action StopVideo2;
    public event Action StopVideo3;

    private void Start()
    {
        StartTimer();
    }

    void Update()
    {
        if (_isRunning)
        {
            _timeElapsed += Time.deltaTime;
            UpdateTimerDisplay();
        }

        if (_timeElapsed >= 3.7f)
        {
            _icons.gameObject.SetActive(true);
        }

        if (_timeElapsed >= 5.3f)
        {
            if (_isPausing1 == false)
            {
                StopVideo1?.Invoke();
                _isPausing1 = true;
            }
        }

        if (_timeElapsed >= 10.5f)
        {
            if (_isPausing2 == false)
            {
                StopVideo2?.Invoke();
                _isPausing2 = true;
            }
        }

        if (_timeElapsed >= 14f)
        {
            if (_isPausing3 == false)
            {
                StopVideo3?.Invoke();
                _isPausing3 = true;
            }
        }
    }

    public void StartTimer()
    {
        _isRunning = true;
    }

    public void StopTimer()
    {
        _isRunning = false;
    }

    private void UpdateTimerDisplay()
    {
        int seconds = (int)_timeElapsed;
        int milliseconds = (int)((_timeElapsed - seconds) * 1000);
        _timerText.text = string.Format("{0:00}:{1:000}", seconds, milliseconds);
    }
}
