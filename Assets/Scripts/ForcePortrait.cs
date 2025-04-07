using UnityEngine;

public class ForcePortrait : MonoBehaviour
{
    public RectTransform canvasRoot;

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
    }
}
