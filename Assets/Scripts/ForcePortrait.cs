using System;
using UnityEngine;

public class ForcePortrait : MonoBehaviour
{
    [SerializeField] private GameObject _canvas1; 
    [SerializeField] private GameObject _canvas2; 

    private bool _isPortrait;

    public bool IsPortrait => _isPortrait;

    public event Action IsPortraitChanged;

    void Start()
    {
        CheckOrientation();
    }

    void Update()
    {
        if ((_isPortrait && Screen.width > Screen.height) ||
            (!_isPortrait && Screen.height > Screen.width))
        {
            CheckOrientation();
        }
    }

    private void CheckOrientation()
    {
        if (Screen.height > Screen.width) 
        {
            _isPortrait = true;
            IsPortraitChanged?.Invoke();
            _canvas1.SetActive(true);
            _canvas2.SetActive(false);
        }
        else 
        {
            _isPortrait = false;
            IsPortraitChanged?.Invoke();
            _canvas1.SetActive(false);
            _canvas2.SetActive(true);
        }
    }
}