using UnityEngine;

public class ForcePortrait : MonoBehaviour
{
    public RectTransform canvasRoot;

    void Start()
    {
        // Сразу ставим портретную ориентацию
        Screen.orientation = ScreenOrientation.Portrait;
        Screen.autorotateToLandscapeLeft = false;
        Screen.autorotateToLandscapeRight = false;
        Screen.autorotateToPortraitUpsideDown = false;
        Screen.autorotateToPortrait = true;

        Screen.orientation = ScreenOrientation.AutoRotation;
    }

    void Update()
    {
        if (Screen.width > Screen.height)
        {
            canvasRoot.rotation = Quaternion.Euler(0, 0, 90);
        }
        else
        {
            canvasRoot.rotation = Quaternion.identity;
        }

        if (Screen.orientation != ScreenOrientation.Portrait &&
            Screen.orientation != ScreenOrientation.AutoRotation)
        {
            Screen.orientation = ScreenOrientation.Portrait;
        }
    }
}
