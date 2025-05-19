var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.JointSpring' )
  var i817 = data
  i816.spring = i817[0]
  i816.damper = i817[1]
  i816.targetPosition = i817[2]
  return i816
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.JointMotor' )
  var i819 = data
  i818.m_TargetVelocity = i819[0]
  i818.m_Force = i819[1]
  i818.m_FreeSpin = i819[2]
  return i818
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.JointLimits' )
  var i821 = data
  i820.m_Min = i821[0]
  i820.m_Max = i821[1]
  i820.m_Bounciness = i821[2]
  i820.m_BounceMinVelocity = i821[3]
  i820.m_ContactDistance = i821[4]
  i820.minBounce = i821[5]
  i820.maxBounce = i821[6]
  return i820
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.JointDrive' )
  var i823 = data
  i822.m_PositionSpring = i823[0]
  i822.m_PositionDamper = i823[1]
  i822.m_MaximumForce = i823[2]
  i822.m_UseAcceleration = i823[3]
  return i822
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i825 = data
  i824.m_Spring = i825[0]
  i824.m_Damper = i825[1]
  return i824
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i827 = data
  i826.m_Limit = i827[0]
  i826.m_Bounciness = i827[1]
  i826.m_ContactDistance = i827[2]
  return i826
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i829 = data
  i828.m_ExtremumSlip = i829[0]
  i828.m_ExtremumValue = i829[1]
  i828.m_AsymptoteSlip = i829[2]
  i828.m_AsymptoteValue = i829[3]
  i828.m_Stiffness = i829[4]
  return i828
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i831 = data
  i830.m_LowerAngle = i831[0]
  i830.m_UpperAngle = i831[1]
  return i830
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i833 = data
  i832.m_MotorSpeed = i833[0]
  i832.m_MaximumMotorTorque = i833[1]
  return i832
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i835 = data
  i834.m_DampingRatio = i835[0]
  i834.m_Frequency = i835[1]
  i834.m_Angle = i835[2]
  return i834
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i837 = data
  i836.m_LowerTranslation = i837[0]
  i836.m_UpperTranslation = i837[1]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i839 = data
  i838.pivot = new pc.Vec2( i839[0], i839[1] )
  i838.anchorMin = new pc.Vec2( i839[2], i839[3] )
  i838.anchorMax = new pc.Vec2( i839[4], i839[5] )
  i838.sizeDelta = new pc.Vec2( i839[6], i839[7] )
  i838.anchoredPosition3D = new pc.Vec3( i839[8], i839[9], i839[10] )
  i838.rotation = new pc.Quat(i839[11], i839[12], i839[13], i839[14])
  i838.scale = new pc.Vec3( i839[15], i839[16], i839[17] )
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i841 = data
  i840.cullTransparentMesh = !!i841[0]
  return i840
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.UI.Image' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'm_Sprite')
  i842.m_Type = i843[2]
  i842.m_PreserveAspect = !!i843[3]
  i842.m_FillCenter = !!i843[4]
  i842.m_FillMethod = i843[5]
  i842.m_FillAmount = i843[6]
  i842.m_FillClockwise = !!i843[7]
  i842.m_FillOrigin = i843[8]
  i842.m_UseSpriteMesh = !!i843[9]
  i842.m_PixelsPerUnitMultiplier = i843[10]
  request.r(i843[11], i843[12], 0, i842, 'm_Material')
  i842.m_Maskable = !!i843[13]
  i842.m_Color = new pc.Color(i843[14], i843[15], i843[16], i843[17])
  i842.m_RaycastTarget = !!i843[18]
  i842.m_RaycastPadding = new pc.Vec4( i843[19], i843[20], i843[21], i843[22] )
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i845 = data
  i844.name = i845[0]
  i844.tagId = i845[1]
  i844.enabled = !!i845[2]
  i844.isStatic = !!i845[3]
  i844.layer = i845[4]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i847 = data
  i846.name = i847[0]
  i846.width = i847[1]
  i846.height = i847[2]
  i846.mipmapCount = i847[3]
  i846.anisoLevel = i847[4]
  i846.filterMode = i847[5]
  i846.hdr = !!i847[6]
  i846.format = i847[7]
  i846.wrapMode = i847[8]
  i846.alphaIsTransparency = !!i847[9]
  i846.alphaSource = i847[10]
  i846.graphicsFormat = i847[11]
  i846.sRGBTexture = !!i847[12]
  i846.desiredColorSpace = i847[13]
  i846.wrapU = i847[14]
  i846.wrapV = i847[15]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i849 = data
  i848.name = i849[0]
  i848.width = i849[1]
  i848.height = i849[2]
  i848.anisoLevel = i849[3]
  i848.filterMode = i849[4]
  i848.hdr = !!i849[5]
  i848.colorFormat = i849[6]
  i848.depthStencilFormat = i849[7]
  i848.renderTextureFormat = i849[8]
  i848.depth = i849[9]
  i848.wrapU = i849[10]
  i848.wrapV = i849[11]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i851 = data
  i850.name = i851[0]
  i850.index = i851[1]
  i850.startup = !!i851[2]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i853 = data
  i852.position = new pc.Vec3( i853[0], i853[1], i853[2] )
  i852.scale = new pc.Vec3( i853[3], i853[4], i853[5] )
  i852.rotation = new pc.Quat(i853[6], i853[7], i853[8], i853[9])
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i855 = data
  i854.enabled = !!i855[0]
  i854.aspect = i855[1]
  i854.orthographic = !!i855[2]
  i854.orthographicSize = i855[3]
  i854.backgroundColor = new pc.Color(i855[4], i855[5], i855[6], i855[7])
  i854.nearClipPlane = i855[8]
  i854.farClipPlane = i855[9]
  i854.fieldOfView = i855[10]
  i854.depth = i855[11]
  i854.clearFlags = i855[12]
  i854.cullingMask = i855[13]
  i854.rect = i855[14]
  request.r(i855[15], i855[16], 0, i854, 'targetTexture')
  i854.usePhysicalProperties = !!i855[17]
  i854.focalLength = i855[18]
  i854.sensorSize = new pc.Vec2( i855[19], i855[20] )
  i854.lensShift = new pc.Vec2( i855[21], i855[22] )
  i854.gateFit = i855[23]
  i854.commandBufferCount = i855[24]
  i854.cameraType = i855[25]
  return i854
}

Deserializers["ForcePortrait"] = function (request, data, root) {
  var i856 = root || request.c( 'ForcePortrait' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, '_canvas1')
  request.r(i857[2], i857[3], 0, i856, '_canvas2')
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i859 = data
  i858.enabled = !!i859[0]
  i858.planeDistance = i859[1]
  i858.referencePixelsPerUnit = i859[2]
  i858.isFallbackOverlay = !!i859[3]
  i858.renderMode = i859[4]
  i858.renderOrder = i859[5]
  i858.sortingLayerName = i859[6]
  i858.sortingOrder = i859[7]
  i858.scaleFactor = i859[8]
  request.r(i859[9], i859[10], 0, i858, 'worldCamera')
  i858.overrideSorting = !!i859[11]
  i858.pixelPerfect = !!i859[12]
  i858.targetDisplay = i859[13]
  i858.overridePixelPerfect = !!i859[14]
  return i858
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i861 = data
  i860.m_UiScaleMode = i861[0]
  i860.m_ReferencePixelsPerUnit = i861[1]
  i860.m_ScaleFactor = i861[2]
  i860.m_ReferenceResolution = new pc.Vec2( i861[3], i861[4] )
  i860.m_ScreenMatchMode = i861[5]
  i860.m_MatchWidthOrHeight = i861[6]
  i860.m_PhysicalUnit = i861[7]
  i860.m_FallbackScreenDPI = i861[8]
  i860.m_DefaultSpriteDPI = i861[9]
  i860.m_DynamicPixelsPerUnit = i861[10]
  i860.m_PresetInfoIsWorld = !!i861[11]
  return i860
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i863 = data
  i862.m_IgnoreReversedGraphics = !!i863[0]
  i862.m_BlockingObjects = i863[1]
  i862.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i863[2] )
  return i862
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'm_Texture')
  i864.m_UVRect = UnityEngine.Rect.MinMaxRect(i865[2], i865[3], i865[4], i865[5])
  request.r(i865[6], i865[7], 0, i864, 'm_Material')
  i864.m_Maskable = !!i865[8]
  i864.m_Color = new pc.Color(i865[9], i865[10], i865[11], i865[12])
  i864.m_RaycastTarget = !!i865[13]
  i864.m_RaycastPadding = new pc.Vec4( i865[14], i865[15], i865[16], i865[17] )
  return i864
}

Deserializers["DragAndDrop.DragAndDropArtillery"] = function (request, data, root) {
  var i866 = root || request.c( 'DragAndDrop.DragAndDropArtillery' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, '_spritArtillery')
  var i869 = i867[2]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i866._ridingHands = i868
  request.r(i867[3], i867[4], 0, i866, '_timeController')
  request.r(i867[5], i867[6], 0, i866, '_spawnLocation')
  request.r(i867[7], i867[8], 0, i866, '_spawnLocation2')
  return i866
}

Deserializers["RidingHand"] = function (request, data, root) {
  var i872 = root || request.c( 'RidingHand' )
  var i873 = data
  i872._speed = i873[0]
  i872._height = i873[1]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i875 = data
  i874.usedByComposite = !!i875[0]
  i874.autoTiling = !!i875[1]
  i874.size = new pc.Vec2( i875[2], i875[3] )
  i874.edgeRadius = i875[4]
  i874.enabled = !!i875[5]
  i874.isTrigger = !!i875[6]
  i874.usedByEffector = !!i875[7]
  i874.density = i875[8]
  i874.offset = new pc.Vec2( i875[9], i875[10] )
  request.r(i875[11], i875[12], 0, i874, 'material')
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i877 = data
  i876.bodyType = i877[0]
  request.r(i877[1], i877[2], 0, i876, 'material')
  i876.simulated = !!i877[3]
  i876.useAutoMass = !!i877[4]
  i876.mass = i877[5]
  i876.drag = i877[6]
  i876.angularDrag = i877[7]
  i876.gravityScale = i877[8]
  i876.collisionDetectionMode = i877[9]
  i876.sleepMode = i877[10]
  i876.constraints = i877[11]
  return i876
}

Deserializers["Spawnlocation"] = function (request, data, root) {
  var i878 = root || request.c( 'Spawnlocation' )
  var i879 = data
  return i878
}

Deserializers["ThrobbingHand"] = function (request, data, root) {
  var i880 = root || request.c( 'ThrobbingHand' )
  var i881 = data
  i880.scaleSpeed = i881[0]
  i880.scaleAmount = i881[1]
  request.r(i881[2], i881[3], 0, i880, '_button')
  request.r(i881[4], i881[5], 0, i880, '_timeController')
  request.r(i881[6], i881[7], 0, i880, '_pumpingButton')
  return i880
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.UI.Button' )
  var i883 = data
  i882.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i883[0], i882.m_OnClick)
  i882.m_Navigation = request.d('UnityEngine.UI.Navigation', i883[1], i882.m_Navigation)
  i882.m_Transition = i883[2]
  i882.m_Colors = request.d('UnityEngine.UI.ColorBlock', i883[3], i882.m_Colors)
  i882.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i883[4], i882.m_SpriteState)
  i882.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i883[5], i882.m_AnimationTriggers)
  i882.m_Interactable = !!i883[6]
  request.r(i883[7], i883[8], 0, i882, 'm_TargetGraphic')
  return i882
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i885 = data
  i884.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i885[0], i884.m_PersistentCalls)
  return i884
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i887 = data
  var i889 = i887[0]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i889.length; i += 1) {
    i888.add(request.d('UnityEngine.Events.PersistentCall', i889[i + 0]));
  }
  i886.m_Calls = i888
  return i886
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'm_Target')
  i892.m_TargetAssemblyTypeName = i893[2]
  i892.m_MethodName = i893[3]
  i892.m_Mode = i893[4]
  i892.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i893[5], i892.m_Arguments)
  i892.m_CallState = i893[6]
  return i892
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i895 = data
  i894.m_Mode = i895[0]
  i894.m_WrapAround = !!i895[1]
  request.r(i895[2], i895[3], 0, i894, 'm_SelectOnUp')
  request.r(i895[4], i895[5], 0, i894, 'm_SelectOnDown')
  request.r(i895[6], i895[7], 0, i894, 'm_SelectOnLeft')
  request.r(i895[8], i895[9], 0, i894, 'm_SelectOnRight')
  return i894
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i897 = data
  i896.m_NormalColor = new pc.Color(i897[0], i897[1], i897[2], i897[3])
  i896.m_HighlightedColor = new pc.Color(i897[4], i897[5], i897[6], i897[7])
  i896.m_PressedColor = new pc.Color(i897[8], i897[9], i897[10], i897[11])
  i896.m_SelectedColor = new pc.Color(i897[12], i897[13], i897[14], i897[15])
  i896.m_DisabledColor = new pc.Color(i897[16], i897[17], i897[18], i897[19])
  i896.m_ColorMultiplier = i897[20]
  i896.m_FadeDuration = i897[21]
  return i896
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'm_HighlightedSprite')
  request.r(i899[2], i899[3], 0, i898, 'm_PressedSprite')
  request.r(i899[4], i899[5], 0, i898, 'm_SelectedSprite')
  request.r(i899[6], i899[7], 0, i898, 'm_DisabledSprite')
  return i898
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i901 = data
  i900.m_NormalTrigger = i901[0]
  i900.m_HighlightedTrigger = i901[1]
  i900.m_PressedTrigger = i901[2]
  i900.m_SelectedTrigger = i901[3]
  i900.m_DisabledTrigger = i901[4]
  return i900
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'm_FirstSelected')
  i902.m_sendNavigationEvents = !!i903[2]
  i902.m_DragThreshold = i903[3]
  return i902
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i905 = data
  i904.m_HorizontalAxis = i905[0]
  i904.m_VerticalAxis = i905[1]
  i904.m_SubmitButton = i905[2]
  i904.m_CancelButton = i905[3]
  i904.m_InputActionsPerSecond = i905[4]
  i904.m_RepeatDelay = i905[5]
  i904.m_ForceModuleActive = !!i905[6]
  i904.m_SendPointerHoverToParent = !!i905[7]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.VideoPlayer"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.VideoPlayer' )
  var i907 = data
  i906.enabled = !!i907[0]
  i906.source = i907[1]
  request.r(i907[2], i907[3], 0, i906, 'clip')
  i906.url = i907[4]
  i906.playOnAwake = !!i907[5]
  i906.isLooping = !!i907[6]
  i906.renderMode = i907[7]
  request.r(i907[8], i907[9], 0, i906, 'targetTexture')
  request.r(i907[10], i907[11], 0, i906, 'targetMaterialRenderer')
  i906.targetMaterialProperty = i907[12]
  i906.playbackSpeed = i907[13]
  return i906
}

Deserializers["TimeController"] = function (request, data, root) {
  var i908 = root || request.c( 'TimeController' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, '_timer')
  request.r(i909[2], i909[3], 0, i908, '_videoPlayer')
  request.r(i909[4], i909[5], 0, i908, '_videoPlayer2')
  request.r(i909[6], i909[7], 0, i908, '_forcePortrait')
  request.r(i909[8], i909[9], 0, i908, '_slidingHand1')
  request.r(i909[10], i909[11], 0, i908, '_slidingHand1g')
  request.r(i909[12], i909[13], 0, i908, '_slidingHand2')
  request.r(i909[14], i909[15], 0, i908, '_slidingHand2g')
  request.r(i909[16], i909[17], 0, i908, '_slidingHand3')
  request.r(i909[18], i909[19], 0, i908, '_slidingHand3g')
  request.r(i909[20], i909[21], 0, i908, '_pumping1')
  request.r(i909[22], i909[23], 0, i908, '_pumping1g')
  request.r(i909[24], i909[25], 0, i908, '_pumping2')
  request.r(i909[26], i909[27], 0, i908, '_pumping2g')
  request.r(i909[28], i909[29], 0, i908, '_dragAndDropArtillery1')
  request.r(i909[30], i909[31], 0, i908, '_dragAndDropArtillery1g')
  request.r(i909[32], i909[33], 0, i908, '_dragAndDropArtillery2')
  request.r(i909[34], i909[35], 0, i908, '_dragAndDropArtillery2g')
  request.r(i909[36], i909[37], 0, i908, '_dragAndDropArtillery3')
  request.r(i909[38], i909[39], 0, i908, '_dragAndDropArtillery3g')
  var i911 = i909[40]
  var i910 = []
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 2, i910, '')
  }
  i908._spawnLocations = i910
  return i908
}

Deserializers["Timer"] = function (request, data, root) {
  var i914 = root || request.c( 'Timer' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, '_icons')
  request.r(i915[2], i915[3], 0, i914, '_icons2')
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i917 = data
  i916.ambientIntensity = i917[0]
  i916.reflectionIntensity = i917[1]
  i916.ambientMode = i917[2]
  i916.ambientLight = new pc.Color(i917[3], i917[4], i917[5], i917[6])
  i916.ambientSkyColor = new pc.Color(i917[7], i917[8], i917[9], i917[10])
  i916.ambientGroundColor = new pc.Color(i917[11], i917[12], i917[13], i917[14])
  i916.ambientEquatorColor = new pc.Color(i917[15], i917[16], i917[17], i917[18])
  i916.fogColor = new pc.Color(i917[19], i917[20], i917[21], i917[22])
  i916.fogEndDistance = i917[23]
  i916.fogStartDistance = i917[24]
  i916.fogDensity = i917[25]
  i916.fog = !!i917[26]
  request.r(i917[27], i917[28], 0, i916, 'skybox')
  i916.fogMode = i917[29]
  var i919 = i917[30]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i919[i + 0]) );
  }
  i916.lightmaps = i918
  i916.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i917[31], i916.lightProbes)
  i916.lightmapsMode = i917[32]
  i916.mixedBakeMode = i917[33]
  i916.environmentLightingMode = i917[34]
  i916.ambientProbe = new pc.SphericalHarmonicsL2(i917[35])
  i916.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i917[36])
  i916.useReferenceAmbientProbe = !!i917[37]
  request.r(i917[38], i917[39], 0, i916, 'customReflection')
  request.r(i917[40], i917[41], 0, i916, 'defaultReflection')
  i916.defaultReflectionMode = i917[42]
  i916.defaultReflectionResolution = i917[43]
  i916.sunLightObjectId = i917[44]
  i916.pixelLightCount = i917[45]
  i916.defaultReflectionHDR = !!i917[46]
  i916.hasLightDataAsset = !!i917[47]
  i916.hasManualGenerate = !!i917[48]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'lightmapColor')
  request.r(i923[2], i923[3], 0, i922, 'lightmapDirection')
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i924 = root || new UnityEngine.LightProbes()
  var i925 = data
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i932 = root || new pc.UnityMaterial()
  var i933 = data
  i932.name = i933[0]
  request.r(i933[1], i933[2], 0, i932, 'shader')
  i932.renderQueue = i933[3]
  i932.enableInstancing = !!i933[4]
  var i935 = i933[5]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i935[i + 0]) );
  }
  i932.floatParameters = i934
  var i937 = i933[6]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i937[i + 0]) );
  }
  i932.colorParameters = i936
  var i939 = i933[7]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i939[i + 0]) );
  }
  i932.vectorParameters = i938
  var i941 = i933[8]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i941[i + 0]) );
  }
  i932.textureParameters = i940
  var i943 = i933[9]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i943[i + 0]) );
  }
  i932.materialFlags = i942
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i947 = data
  i946.name = i947[0]
  i946.value = i947[1]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i951 = data
  i950.name = i951[0]
  i950.value = new pc.Color(i951[1], i951[2], i951[3], i951[4])
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i955 = data
  i954.name = i955[0]
  i954.value = new pc.Vec4( i955[1], i955[2], i955[3], i955[4] )
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i959 = data
  i958.name = i959[0]
  request.r(i959[1], i959[2], 0, i958, 'value')
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i963 = data
  i962.name = i963[0]
  i962.enabled = !!i963[1]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i965 = data
  var i967 = i965[0]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i967.length; i += 1) {
    i966.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i967[i + 0]));
  }
  i964.ShaderCompilationErrors = i966
  i964.name = i965[1]
  i964.guid = i965[2]
  var i969 = i965[3]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( i969[i + 0] );
  }
  i964.shaderDefinedKeywords = i968
  var i971 = i965[4]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i971[i + 0]) );
  }
  i964.passes = i970
  var i973 = i965[5]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i973[i + 0]) );
  }
  i964.usePasses = i972
  var i975 = i965[6]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i975[i + 0]) );
  }
  i964.defaultParameterValues = i974
  request.r(i965[7], i965[8], 0, i964, 'unityFallbackShader')
  i964.readDepth = !!i965[9]
  i964.isCreatedByShaderGraph = !!i965[10]
  i964.compiled = !!i965[11]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i979 = data
  i978.shaderName = i979[0]
  i978.errorMessage = i979[1]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i984 = root || new pc.UnityShaderPass()
  var i985 = data
  i984.id = i985[0]
  i984.subShaderIndex = i985[1]
  i984.name = i985[2]
  i984.passType = i985[3]
  i984.grabPassTextureName = i985[4]
  i984.usePass = !!i985[5]
  i984.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[6], i984.zTest)
  i984.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[7], i984.zWrite)
  i984.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[8], i984.culling)
  i984.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i985[9], i984.blending)
  i984.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i985[10], i984.alphaBlending)
  i984.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[11], i984.colorWriteMask)
  i984.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[12], i984.offsetUnits)
  i984.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[13], i984.offsetFactor)
  i984.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[14], i984.stencilRef)
  i984.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[15], i984.stencilReadMask)
  i984.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[16], i984.stencilWriteMask)
  i984.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i985[17], i984.stencilOp)
  i984.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i985[18], i984.stencilOpFront)
  i984.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i985[19], i984.stencilOpBack)
  var i987 = i985[20]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i987[i + 0]) );
  }
  i984.tags = i986
  var i989 = i985[21]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( i989[i + 0] );
  }
  i984.passDefinedKeywords = i988
  var i991 = i985[22]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i991[i + 0]) );
  }
  i984.passDefinedKeywordGroups = i990
  var i993 = i985[23]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i993[i + 0]) );
  }
  i984.variants = i992
  var i995 = i985[24]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i995[i + 0]) );
  }
  i984.excludedVariants = i994
  i984.hasDepthReader = !!i985[25]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i997 = data
  i996.val = i997[0]
  i996.name = i997[1]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i999 = data
  i998.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i999[0], i998.src)
  i998.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i999[1], i998.dst)
  i998.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i999[2], i998.op)
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1001 = data
  i1000.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1001[0], i1000.pass)
  i1000.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1001[1], i1000.fail)
  i1000.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1001[2], i1000.zFail)
  i1000.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1001[3], i1000.comp)
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1005 = data
  i1004.name = i1005[0]
  i1004.value = i1005[1]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1009 = data
  var i1011 = i1009[0]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( i1011[i + 0] );
  }
  i1008.keywords = i1010
  i1008.hasDiscard = !!i1009[1]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1015 = data
  i1014.passId = i1015[0]
  i1014.subShaderIndex = i1015[1]
  var i1017 = i1015[2]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( i1017[i + 0] );
  }
  i1014.keywords = i1016
  i1014.vertexProgram = i1015[3]
  i1014.fragmentProgram = i1015[4]
  i1014.exportedForWebGl2 = !!i1015[5]
  i1014.readDepth = !!i1015[6]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'shader')
  i1020.pass = i1021[2]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1025 = data
  i1024.name = i1025[0]
  i1024.type = i1025[1]
  i1024.value = new pc.Vec4( i1025[2], i1025[3], i1025[4], i1025[5] )
  i1024.textureValue = i1025[6]
  i1024.shaderPropertyFlag = i1025[7]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1027 = data
  i1026.name = i1027[0]
  request.r(i1027[1], i1027[2], 0, i1026, 'texture')
  i1026.aabb = i1027[3]
  i1026.vertices = i1027[4]
  i1026.triangles = i1027[5]
  i1026.textureRect = UnityEngine.Rect.MinMaxRect(i1027[6], i1027[7], i1027[8], i1027[9])
  i1026.packedRect = UnityEngine.Rect.MinMaxRect(i1027[10], i1027[11], i1027[12], i1027[13])
  i1026.border = new pc.Vec4( i1027[14], i1027[15], i1027[16], i1027[17] )
  i1026.transparency = i1027[18]
  i1026.bounds = i1027[19]
  i1026.pixelsPerUnit = i1027[20]
  i1026.textureWidth = i1027[21]
  i1026.textureHeight = i1027[22]
  i1026.nativeSize = new pc.Vec2( i1027[23], i1027[24] )
  i1026.pivot = new pc.Vec2( i1027[25], i1027[26] )
  i1026.textureRectOffset = new pc.Vec2( i1027[27], i1027[28] )
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.VideoClip"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.VideoClip' )
  var i1029 = data
  i1028.name = i1029[0]
  i1028.width = i1029[1]
  i1028.height = i1029[2]
  i1028.frameRate = i1029[3]
  i1028.frameCount = System.UInt64(i1029[4])
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1031 = data
  var i1033 = i1031[0]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1033[i + 0]) );
  }
  i1030.files = i1032
  i1030.componentToPrefabIds = i1031[1]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1037 = data
  i1036.path = i1037[0]
  request.r(i1037[1], i1037[2], 0, i1036, 'unityObject')
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1039 = data
  var i1041 = i1039[0]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1041[i + 0]) );
  }
  i1038.scriptsExecutionOrder = i1040
  var i1043 = i1039[1]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1043[i + 0]) );
  }
  i1038.sortingLayers = i1042
  var i1045 = i1039[2]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1045[i + 0]) );
  }
  i1038.cullingLayers = i1044
  i1038.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1039[3], i1038.timeSettings)
  i1038.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1039[4], i1038.physicsSettings)
  i1038.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1039[5], i1038.physics2DSettings)
  i1038.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1039[6], i1038.qualitySettings)
  i1038.enableRealtimeShadows = !!i1039[7]
  i1038.enableAutoInstancing = !!i1039[8]
  i1038.enableDynamicBatching = !!i1039[9]
  i1038.lightmapEncodingQuality = i1039[10]
  i1038.desiredColorSpace = i1039[11]
  var i1047 = i1039[12]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( i1047[i + 0] );
  }
  i1038.allTags = i1046
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1051 = data
  i1050.name = i1051[0]
  i1050.value = i1051[1]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1055 = data
  i1054.id = i1055[0]
  i1054.name = i1055[1]
  i1054.value = i1055[2]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1059 = data
  i1058.id = i1059[0]
  i1058.name = i1059[1]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1061 = data
  i1060.fixedDeltaTime = i1061[0]
  i1060.maximumDeltaTime = i1061[1]
  i1060.timeScale = i1061[2]
  i1060.maximumParticleTimestep = i1061[3]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1063 = data
  i1062.gravity = new pc.Vec3( i1063[0], i1063[1], i1063[2] )
  i1062.defaultSolverIterations = i1063[3]
  i1062.bounceThreshold = i1063[4]
  i1062.autoSyncTransforms = !!i1063[5]
  i1062.autoSimulation = !!i1063[6]
  var i1065 = i1063[7]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1065[i + 0]) );
  }
  i1062.collisionMatrix = i1064
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1069 = data
  i1068.enabled = !!i1069[0]
  i1068.layerId = i1069[1]
  i1068.otherLayerId = i1069[2]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'material')
  i1070.gravity = new pc.Vec2( i1071[2], i1071[3] )
  i1070.positionIterations = i1071[4]
  i1070.velocityIterations = i1071[5]
  i1070.velocityThreshold = i1071[6]
  i1070.maxLinearCorrection = i1071[7]
  i1070.maxAngularCorrection = i1071[8]
  i1070.maxTranslationSpeed = i1071[9]
  i1070.maxRotationSpeed = i1071[10]
  i1070.baumgarteScale = i1071[11]
  i1070.baumgarteTOIScale = i1071[12]
  i1070.timeToSleep = i1071[13]
  i1070.linearSleepTolerance = i1071[14]
  i1070.angularSleepTolerance = i1071[15]
  i1070.defaultContactOffset = i1071[16]
  i1070.autoSimulation = !!i1071[17]
  i1070.queriesHitTriggers = !!i1071[18]
  i1070.queriesStartInColliders = !!i1071[19]
  i1070.callbacksOnDisable = !!i1071[20]
  i1070.reuseCollisionCallbacks = !!i1071[21]
  i1070.autoSyncTransforms = !!i1071[22]
  var i1073 = i1071[23]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1073[i + 0]) );
  }
  i1070.collisionMatrix = i1072
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1077 = data
  i1076.enabled = !!i1077[0]
  i1076.layerId = i1077[1]
  i1076.otherLayerId = i1077[2]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1081[i + 0]) );
  }
  i1078.qualityLevels = i1080
  var i1083 = i1079[1]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1078.names = i1082
  i1078.shadows = i1079[2]
  i1078.anisotropicFiltering = i1079[3]
  i1078.antiAliasing = i1079[4]
  i1078.lodBias = i1079[5]
  i1078.shadowCascades = i1079[6]
  i1078.shadowDistance = i1079[7]
  i1078.shadowmaskMode = i1079[8]
  i1078.shadowProjection = i1079[9]
  i1078.shadowResolution = i1079[10]
  i1078.softParticles = !!i1079[11]
  i1078.softVegetation = !!i1079[12]
  i1078.activeColorSpace = i1079[13]
  i1078.desiredColorSpace = i1079[14]
  i1078.masterTextureLimit = i1079[15]
  i1078.maxQueuedFrames = i1079[16]
  i1078.particleRaycastBudget = i1079[17]
  i1078.pixelLightCount = i1079[18]
  i1078.realtimeReflectionProbes = !!i1079[19]
  i1078.shadowCascade2Split = i1079[20]
  i1078.shadowCascade4Split = new pc.Vec3( i1079[21], i1079[22], i1079[23] )
  i1078.streamingMipmapsActive = !!i1079[24]
  i1078.vSyncCount = i1079[25]
  i1078.asyncUploadBufferSize = i1079[26]
  i1078.asyncUploadTimeSlice = i1079[27]
  i1078.billboardsFaceCameraPosition = !!i1079[28]
  i1078.shadowNearPlaneOffset = i1079[29]
  i1078.streamingMipmapsMemoryBudget = i1079[30]
  i1078.maximumLODLevel = i1079[31]
  i1078.streamingMipmapsAddAllCameras = !!i1079[32]
  i1078.streamingMipmapsMaxLevelReduction = i1079[33]
  i1078.streamingMipmapsRenderersPerFrame = i1079[34]
  i1078.resolutionScalingFixedDPIFactor = i1079[35]
  i1078.streamingMipmapsMaxFileIORequests = i1079[36]
  i1078.currentQualityLevel = i1079[37]
  return i1078
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1086 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1087 = data
  request.r(i1087[0], i1087[1], 0, i1086, 'm_ObjectArgument')
  i1086.m_ObjectArgumentAssemblyTypeName = i1087[2]
  i1086.m_IntArgument = i1087[3]
  i1086.m_FloatArgument = i1087[4]
  i1086.m_StringArgument = i1087[5]
  i1086.m_BoolArgument = !!i1087[6]
  return i1086
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"colorFormat":6,"depthStencilFormat":7,"renderTextureFormat":8,"depth":9,"wrapU":10,"wrapV":11},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.VideoPlayer":{"enabled":0,"source":1,"clip":2,"url":4,"playOnAwake":5,"isLooping":6,"renderMode":7,"targetTexture":8,"targetMaterialRenderer":10,"targetMaterialProperty":12,"playbackSpeed":13},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.VideoClip":{"name":0,"width":1,"height":2,"frameRate":3,"frameCount":4},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"31":[32],"33":[32],"34":[32],"35":[32],"36":[32],"37":[32],"38":[39],"40":[6],"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[42],"49":[21],"50":[21],"51":[21],"52":[21],"53":[21],"54":[21],"55":[21],"56":[21],"57":[21],"58":[21],"59":[21],"60":[21],"61":[21],"62":[6],"63":[64],"65":[66],"67":[66],"11":[0],"68":[69],"70":[71],"72":[69],"73":[0],"74":[0],"13":[11],"3":[1,0],"75":[0],"12":[11],"76":[0],"77":[0],"78":[0],"79":[0],"80":[0],"81":[0],"82":[0],"83":[0],"84":[0],"14":[1,0],"85":[0],"86":[0],"87":[0],"88":[0],"89":[1,0],"90":[0],"91":[24],"92":[24],"25":[24],"93":[24],"94":[6],"95":[6],"96":[97],"98":[6],"99":[0],"100":[64,0],"101":[0,1],"102":[0],"103":[1,0],"104":[64],"105":[1,0],"106":[0],"107":[69]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","ForcePortrait","UnityEngine.GameObject","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.RawImage","UnityEngine.RenderTexture","DragAndDrop.DragAndDropArtillery","RidingHand","TimeController","Spawnlocation","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","ThrobbingHand","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Video.VideoPlayer","UnityEngine.Video.VideoClip","Timer","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.7f1";

Deserializers.productName = "Artilery2.0";

Deserializers.lunaInitializationTime = "04/04/2025 13:22:27";

Deserializers.lunaDaysRunning = "7.7";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "vfrfv3";

Deserializers.lunaAppID = "27856";

Deserializers.projectId = "84cf4890719069d48b7b9de159fe8bbd";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.5\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1745";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3422";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, reflection, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "41833062-b657-4b38-8a99-63e10713ee74";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

