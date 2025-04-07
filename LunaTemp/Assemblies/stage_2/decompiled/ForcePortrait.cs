using UnityEngine;

public class ForcePortrait : MonoBehaviour
{
	public RectTransform canvasRoot;

	private void Start()
	{
		Screen.orientation = ScreenOrientation.Portrait;
		Screen.autorotateToLandscapeLeft = false;
		Screen.autorotateToLandscapeRight = false;
		Screen.autorotateToPortraitUpsideDown = false;
		Screen.autorotateToPortrait = true;
		Screen.orientation = ScreenOrientation.AutoRotation;
	}

	private void Update()
	{
		if (Screen.width > Screen.height)
		{
			canvasRoot.rotation = Quaternion.Euler(0f, 0f, 90f);
		}
		else
		{
			canvasRoot.rotation = Quaternion.identity;
		}
		if (Screen.orientation != ScreenOrientation.Portrait && Screen.orientation != ScreenOrientation.AutoRotation)
		{
			Screen.orientation = ScreenOrientation.Portrait;
		}
	}
}
