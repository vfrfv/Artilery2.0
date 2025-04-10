using System;
using UnityEngine;

public class Timer : MonoBehaviour
{
	[SerializeField]
	private GameObject _icons;

	[SerializeField]
	private GameObject _icons2;

	private float _timeElapsed;

	private bool _isRunning = false;

	private bool _isPausing1 = false;

	private bool _isPausing2 = false;

	private bool _isPausing3 = false;

	private bool _isPausing4 = false;

	private bool _isPausing5 = false;

	private bool _isPausing6 = false;

	public float TimeElapsed => _timeElapsed;

	public event Action StopVideo1;

	public event Action StopVideo2;

	public event Action StopVideo3;

	public event Action StopVideo4;

	public event Action StopVideo5;

	public event Action StopVideo6;

	private void Start()
	{
		StartTimer();
	}

	private void Update()
	{
		if (_isRunning)
		{
			_timeElapsed += Time.deltaTime;
			UpdateTimerDisplay();
		}
		if (_timeElapsed >= 3.7f)
		{
			_icons.gameObject.SetActive(true);
			_icons2.gameObject.SetActive(true);
		}
		if (_timeElapsed >= 5.3f && !_isPausing1)
		{
			this.StopVideo1?.Invoke();
			_isPausing1 = true;
		}
		if (_timeElapsed >= 10.5f && !_isPausing2)
		{
			this.StopVideo2?.Invoke();
			_isPausing2 = true;
		}
		if (_timeElapsed >= 14f && !_isPausing3)
		{
			this.StopVideo3?.Invoke();
			_isPausing3 = true;
		}
		if (_timeElapsed >= 17.6f && !_isPausing4)
		{
			this.StopVideo4?.Invoke();
			_isPausing4 = true;
		}
		if (_timeElapsed >= 20.1f && !_isPausing5)
		{
			this.StopVideo5?.Invoke();
			_isPausing5 = true;
		}
		if (_timeElapsed >= 25.5f && !_isPausing6)
		{
			this.StopVideo6?.Invoke();
			_isPausing6 = true;
		}
		if (_timeElapsed >= 28.7f)
		{
			_icons.gameObject.SetActive(false);
			_icons2.gameObject.SetActive(false);
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
		int milliseconds = (int)((_timeElapsed - (float)seconds) * 1000f);
	}
}
