using DragAndDrop;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.Video;

public class TimeController : MonoBehaviour
{
    [SerializeField] private Timer _timer;
    [SerializeField] private VideoPlayer _videoPlayer;
    [SerializeField] private VideoPlayer _videoPlayer2;
    [SerializeField] private ForcePortrait _forcePortrait;

    [SerializeField] private RidingHand _slidingHand1;
    [SerializeField] private RidingHand _slidingHand1g;
    [SerializeField] private RidingHand _slidingHand2;
    [SerializeField] private RidingHand _slidingHand2g;
    [SerializeField] private RidingHand _slidingHand3;
    [SerializeField] private RidingHand _slidingHand3g;

    [SerializeField] private GameObject _pumping1;
    [SerializeField] private GameObject _pumping1g;
    [SerializeField] private GameObject _pumping2;
    [SerializeField] private GameObject _pumping2g;

    [SerializeField] private DragAndDropArtillery _dragAndDropArtillery1;
    [SerializeField] private DragAndDropArtillery _dragAndDropArtillery1g;
    [SerializeField] private DragAndDropArtillery _dragAndDropArtillery2;
    [SerializeField] private DragAndDropArtillery _dragAndDropArtillery2g;
    [SerializeField] private DragAndDropArtillery _dragAndDropArtillery3;
    [SerializeField] private DragAndDropArtillery _dragAndDropArtillery3g;

    [SerializeField] private Spawnlocation[] _spawnLocations;

    private bool _isPause1 = false;
    private bool _isPause2 = false;
    private bool _isPause3 = false;
    private bool _isPause4 = false;
    private bool _isPause5 = false;
    private bool _isPause6 = false;

    private bool _isShowsHints = false;
    private bool _isPumping = false;

    private void OnEnable()
    {
        _timer.StopVideo1 += Pause1;
        _timer.StopVideo2 += Pause2;
        _timer.StopVideo3 += Pause3;
        _timer.StopVideo4 += Pause1;
        _timer.StopVideo5 += Pause5;
        _timer.StopVideo6 += Pause6;

        _forcePortrait.IsPortraitChanged += OrientationCorrection;
    }

    private void OnDisable()
    {
        _timer.StopVideo1 -= Pause1;
        _timer.StopVideo2 -= Pause2;
        _timer.StopVideo3 -= Pause3;
        _timer.StopVideo4 -= Pause1;
        _timer.StopVideo5 -= Pause5;
        _timer.StopVideo6 -= Pause6;

        //_forcePortrait.IsPortraitChanged -= OrientationCorrection;
    }

    private void Start()
    {
        _forcePortrait.IsPortraitChanged += OrientationCorrection;
        //_videoPlayer.audioOutputMode.IsUnityNull();
    }

    private void Stop()
    {
        _timer.StopTimer();
        _videoPlayer.Pause();
        _videoPlayer2.Pause();
    }

    private void Play()
    {
        _videoPlayer.Play();
        _videoPlayer2.Play();
        _timer.StartTimer();
    }

    public void PlayGame()
    {
        Play();
    }

    public void DisableHintDisplay()
    {
        _isShowsHints = false;
    }

    public void DisablePumpingDisplay()
    {
        _isPumping = false;
    }

    private void Pause1()
    {
        if (_isPause1 == false)
        {
            _isShowsHints = true;
            _activeHint = ActiveHintType.Hint1;
            Stop();

            if (_forcePortrait.IsPortrait == true)
            {
                _dragAndDropArtillery1.Activate();
                _slidingHand1.gameObject.SetActive(true);
            }
            else
            {
                _dragAndDropArtillery1g.Activate();
                _slidingHand1g.gameObject.SetActive(true);
            }

            _isPause1 = true;
        }
        else if (_isPause1 == true && _isPause4 == false)
        {
            _dragAndDropArtillery1g.Location2();
            _dragAndDropArtillery1.Location2();
            _isShowsHints = true;
            _activeHint = ActiveHintType.Hint4;
            Stop();

            if (_forcePortrait.IsPortrait == true)
            {
                _dragAndDropArtillery1.Activate();
                _slidingHand1.gameObject.SetActive(true);
            }
            else
            {
                _dragAndDropArtillery1g.Activate();
                _slidingHand1g.gameObject.SetActive(true);
            }

            _isPause4 = true;
        }
    }

    private void Pause2()
    {
        if (_isPause2 == false)
        {
            _isShowsHints = true;
            _activeHint = ActiveHintType.Hint2;
            Stop();

            if (_forcePortrait.IsPortrait == true)
            {
                _dragAndDropArtillery2.Activate();
                _slidingHand2.gameObject.SetActive(true);
            }
            else
            {
                _dragAndDropArtillery2g.Activate();
                _slidingHand2g.gameObject.SetActive(true);
            }

            _isPause2 = true;
        }
    }

    private void Pause3()
    {
        if (_isPause3 == false )
        {
            _isShowsHints = true;
            _isPumping = true;
            _activeHint = ActiveHintType.Hint3;
            Stop();

            if (_forcePortrait.IsPortrait == true)
            {
                _pumping1.gameObject.SetActive(true);
            }
            else
            {
                _pumping1g.gameObject.SetActive(true);
            }

            _isPause3 = true;
        }
    }

    private void Pause5()
    {
        if (_isPause5 == false)
        {
            _isShowsHints = true;
            _isPumping = true;
            _activeHint = ActiveHintType.Hint5;
            Stop();

            if (_forcePortrait.IsPortrait == true)
            {
                _pumping2.gameObject.SetActive(true);
            }
            else
            {
                _pumping2g.gameObject.SetActive(true);
            }

            _isPause5 = true;
        }
    }

    private void Pause6()
    {
        if (_isPause6 == false)
        {
            _isShowsHints = true;
            _activeHint = ActiveHintType.Hint6;
            Stop();

            if (_forcePortrait.IsPortrait == true)
            {
                _dragAndDropArtillery3.Activate();
                _slidingHand3.gameObject.SetActive(true);
            }
            else
            {
                _dragAndDropArtillery3g.Activate();
                _slidingHand3g.gameObject.SetActive(true);
            }

            _isPause6 = true;
        }
    }

    private void OrientationCorrection()
    {
        if (!_isShowsHints || _activeHint == ActiveHintType.None)
            return;

        ResetHints();

        if(_isPumping == false)
        {
            _dragAndDropArtillery1.ResetDrag();
            _dragAndDropArtillery1g.ResetDrag();
            _dragAndDropArtillery2.ResetDrag();
            _dragAndDropArtillery2g.ResetDrag();
            _dragAndDropArtillery3.ResetDrag();
            _dragAndDropArtillery3g.ResetDrag();
        }  

        switch (_activeHint)
        {
            case ActiveHintType.Hint1:
                if (_forcePortrait.IsPortrait)
                {
                    _dragAndDropArtillery1.Activate();
                    _slidingHand1.gameObject.SetActive(true);
                    _slidingHand1g.gameObject.SetActive(false);
                }
                else
                {
                    _dragAndDropArtillery1g.Activate();
                    _slidingHand1.gameObject.SetActive(false);
                    _slidingHand1g.gameObject.SetActive(true);
                }
                break;

            case ActiveHintType.Hint2:
                if (_forcePortrait.IsPortrait)
                {
                    _dragAndDropArtillery2.Activate();
                    _slidingHand2.gameObject.SetActive(true);
                    _slidingHand2g.gameObject.SetActive(false);
                }
                else
                {
                    _dragAndDropArtillery2g.Activate();
                    _slidingHand2.gameObject.SetActive(false);
                    _slidingHand2g.gameObject.SetActive(true);
                }
                break;

            case ActiveHintType.Hint3:

                if (_forcePortrait.IsPortrait)
                {
                    _pumping1.SetActive(true);
                    _pumping1g.SetActive(false);
                }
                else
                {
                    _pumping1g.SetActive(true);
                    _pumping1.SetActive(false);
                }

                _dragAndDropArtillery1g.Location2();
                _dragAndDropArtillery1.Location2();
                break;

            case ActiveHintType.Hint4:
                if (_forcePortrait.IsPortrait)
                {
                    _dragAndDropArtillery1.Activate();
                    _slidingHand1.gameObject.SetActive(true);
                    _slidingHand1g.gameObject.SetActive(false);
                }
                else
                {
                    _dragAndDropArtillery1g.Activate();
                    _slidingHand1.gameObject.SetActive(false);
                    _slidingHand1g.gameObject.SetActive(true);
                }
                break;

            case ActiveHintType.Hint5:
                if (_forcePortrait.IsPortrait)
                {
                    _pumping2.SetActive(true);
                    _pumping2g.SetActive(false);
                }
                else
                {
                    _pumping2g.SetActive(true);
                    _pumping2.SetActive(false);
                }
                break;

            case ActiveHintType.Hint6:
                if (_forcePortrait.IsPortrait)
                {
                    _dragAndDropArtillery3.Activate();
                    _slidingHand3.gameObject.SetActive(true);
                    _slidingHand3g.gameObject.SetActive(false);
                }
                else
                {
                    _dragAndDropArtillery3g.Activate();
                    _slidingHand3.gameObject.SetActive(false);
                    _slidingHand3g.gameObject.SetActive(true);
                }
                break;
        }
    }

    private void ResetHints()
    {
        _slidingHand1.gameObject.SetActive(false);
        _slidingHand1g.gameObject.SetActive(false);
        _slidingHand2.gameObject.SetActive(false);
        _slidingHand2g.gameObject.SetActive(false);
        _slidingHand3.gameObject.SetActive(false);
        _slidingHand3g.gameObject.SetActive(false);

        _pumping1.SetActive(false);
        _pumping1g.SetActive(false);
        _pumping2.SetActive(false);
        _pumping2g.SetActive(false);
    }

    private enum ActiveHintType { None, Hint1, Hint2, Hint3, Hint4, Hint5, Hint6 }

    private ActiveHintType _activeHint = ActiveHintType.None;
}