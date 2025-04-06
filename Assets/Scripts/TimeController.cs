using DragAndDrop;
using UnityEngine;
using UnityEngine.Video;

public class TimeController : MonoBehaviour
{
    [SerializeField] private Timer _timer;
    [SerializeField] private VideoPlayer _videoPlayer;

    [SerializeField] private RidingHand _slidingHand1;
    [SerializeField] private RidingHand _slidingHand2;
    [SerializeField] private RidingHand _slidingHand3;

    [SerializeField] private GameObject _pumping1;
    [SerializeField] private GameObject _pumping2;

    [SerializeField] private DragAndDropArtillery _dragAndDropArtillery1;
    [SerializeField] private DragAndDropArtillery _dragAndDropArtillery2;
    [SerializeField] private DragAndDropArtillery _dragAndDropArtillery3;

    private void OnEnable()
    {
        _timer.StopVideo1 += Pause1;
        _timer.StopVideo2 += Pause2;
        _timer.StopVideo3 += Pause3;
        _timer.StopVideo4 += Pause1;
        _timer.StopVideo5 += Pause5;
        _timer.StopVideo6 += Pause6;
    }

    private void OnDisable()
    {
        _timer.StopVideo1 -= Pause1;
        _timer.StopVideo2 -= Pause2;
        _timer.StopVideo3 -= Pause3;
        _timer.StopVideo4 -= Pause1;
        _timer.StopVideo5 -= Pause5;
        _timer.StopVideo6 -= Pause6;
    }

    private void Stop()
    {
        _timer.StopTimer();
        _videoPlayer.Pause();
    }

    private void Play()
    {
        _videoPlayer.Play();
        _timer.StartTimer();
    }

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            Stop();
        }

        if (Input.GetKeyDown(KeyCode.A))
        {
            Play();
        }
    }

    public void PlayGame()
    {
        Play();
    }

    private void Pause1()
    {
        Stop();
        _dragAndDropArtillery1.Activate();
        _slidingHand1.gameObject.SetActive(true);
    }

    private void Pause2()
    {
        Stop();
        _dragAndDropArtillery2.Activate();
        _slidingHand2.gameObject.SetActive(true);
    }

    private void Pause3()
    {
        Stop();
        _pumping1.gameObject.SetActive(true);
    }

    private void Pause5()
    {
        Stop();
        _pumping2.gameObject.SetActive(true);
    }

    private void Pause6()
    {
        Stop();
        _dragAndDropArtillery3.Activate();
        _slidingHand3.gameObject.SetActive(true);
    }
}
