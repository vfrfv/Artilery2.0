using UnityEngine;

public class ForcePortrait : MonoBehaviour
{
	public RectTransform canvasRoot;

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
	}
}
