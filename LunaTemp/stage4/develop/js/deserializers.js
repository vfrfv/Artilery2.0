var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.JointSpring' )
  var i805 = data
  i804.spring = i805[0]
  i804.damper = i805[1]
  i804.targetPosition = i805[2]
  return i804
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.JointMotor' )
  var i807 = data
  i806.m_TargetVelocity = i807[0]
  i806.m_Force = i807[1]
  i806.m_FreeSpin = i807[2]
  return i806
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.JointLimits' )
  var i809 = data
  i808.m_Min = i809[0]
  i808.m_Max = i809[1]
  i808.m_Bounciness = i809[2]
  i808.m_BounceMinVelocity = i809[3]
  i808.m_ContactDistance = i809[4]
  i808.minBounce = i809[5]
  i808.maxBounce = i809[6]
  return i808
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.JointDrive' )
  var i811 = data
  i810.m_PositionSpring = i811[0]
  i810.m_PositionDamper = i811[1]
  i810.m_MaximumForce = i811[2]
  i810.m_UseAcceleration = i811[3]
  return i810
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i813 = data
  i812.m_Spring = i813[0]
  i812.m_Damper = i813[1]
  return i812
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i815 = data
  i814.m_Limit = i815[0]
  i814.m_Bounciness = i815[1]
  i814.m_ContactDistance = i815[2]
  return i814
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i817 = data
  i816.m_ExtremumSlip = i817[0]
  i816.m_ExtremumValue = i817[1]
  i816.m_AsymptoteSlip = i817[2]
  i816.m_AsymptoteValue = i817[3]
  i816.m_Stiffness = i817[4]
  return i816
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i819 = data
  i818.m_LowerAngle = i819[0]
  i818.m_UpperAngle = i819[1]
  return i818
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i821 = data
  i820.m_MotorSpeed = i821[0]
  i820.m_MaximumMotorTorque = i821[1]
  return i820
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i823 = data
  i822.m_DampingRatio = i823[0]
  i822.m_Frequency = i823[1]
  i822.m_Angle = i823[2]
  return i822
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i825 = data
  i824.m_LowerTranslation = i825[0]
  i824.m_UpperTranslation = i825[1]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i827 = data
  i826.pivot = new pc.Vec2( i827[0], i827[1] )
  i826.anchorMin = new pc.Vec2( i827[2], i827[3] )
  i826.anchorMax = new pc.Vec2( i827[4], i827[5] )
  i826.sizeDelta = new pc.Vec2( i827[6], i827[7] )
  i826.anchoredPosition3D = new pc.Vec3( i827[8], i827[9], i827[10] )
  i826.rotation = new pc.Quat(i827[11], i827[12], i827[13], i827[14])
  i826.scale = new pc.Vec3( i827[15], i827[16], i827[17] )
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i829 = data
  i828.cullTransparentMesh = !!i829[0]
  return i828
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.UI.Image' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'm_Sprite')
  i830.m_Type = i831[2]
  i830.m_PreserveAspect = !!i831[3]
  i830.m_FillCenter = !!i831[4]
  i830.m_FillMethod = i831[5]
  i830.m_FillAmount = i831[6]
  i830.m_FillClockwise = !!i831[7]
  i830.m_FillOrigin = i831[8]
  i830.m_UseSpriteMesh = !!i831[9]
  i830.m_PixelsPerUnitMultiplier = i831[10]
  request.r(i831[11], i831[12], 0, i830, 'm_Material')
  i830.m_Maskable = !!i831[13]
  i830.m_Color = new pc.Color(i831[14], i831[15], i831[16], i831[17])
  i830.m_RaycastTarget = !!i831[18]
  i830.m_RaycastPadding = new pc.Vec4( i831[19], i831[20], i831[21], i831[22] )
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i833 = data
  i832.name = i833[0]
  i832.tagId = i833[1]
  i832.enabled = !!i833[2]
  i832.isStatic = !!i833[3]
  i832.layer = i833[4]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i835 = data
  i834.name = i835[0]
  i834.width = i835[1]
  i834.height = i835[2]
  i834.mipmapCount = i835[3]
  i834.anisoLevel = i835[4]
  i834.filterMode = i835[5]
  i834.hdr = !!i835[6]
  i834.format = i835[7]
  i834.wrapMode = i835[8]
  i834.alphaIsTransparency = !!i835[9]
  i834.alphaSource = i835[10]
  i834.graphicsFormat = i835[11]
  i834.sRGBTexture = !!i835[12]
  i834.desiredColorSpace = i835[13]
  i834.wrapU = i835[14]
  i834.wrapV = i835[15]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i837 = data
  i836.name = i837[0]
  i836.width = i837[1]
  i836.height = i837[2]
  i836.anisoLevel = i837[3]
  i836.filterMode = i837[4]
  i836.hdr = !!i837[5]
  i836.colorFormat = i837[6]
  i836.depthStencilFormat = i837[7]
  i836.renderTextureFormat = i837[8]
  i836.depth = i837[9]
  i836.wrapU = i837[10]
  i836.wrapV = i837[11]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i839 = data
  i838.name = i839[0]
  i838.index = i839[1]
  i838.startup = !!i839[2]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i841 = data
  i840.position = new pc.Vec3( i841[0], i841[1], i841[2] )
  i840.scale = new pc.Vec3( i841[3], i841[4], i841[5] )
  i840.rotation = new pc.Quat(i841[6], i841[7], i841[8], i841[9])
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i843 = data
  i842.enabled = !!i843[0]
  i842.aspect = i843[1]
  i842.orthographic = !!i843[2]
  i842.orthographicSize = i843[3]
  i842.backgroundColor = new pc.Color(i843[4], i843[5], i843[6], i843[7])
  i842.nearClipPlane = i843[8]
  i842.farClipPlane = i843[9]
  i842.fieldOfView = i843[10]
  i842.depth = i843[11]
  i842.clearFlags = i843[12]
  i842.cullingMask = i843[13]
  i842.rect = i843[14]
  request.r(i843[15], i843[16], 0, i842, 'targetTexture')
  i842.usePhysicalProperties = !!i843[17]
  i842.focalLength = i843[18]
  i842.sensorSize = new pc.Vec2( i843[19], i843[20] )
  i842.lensShift = new pc.Vec2( i843[21], i843[22] )
  i842.gateFit = i843[23]
  i842.commandBufferCount = i843[24]
  i842.cameraType = i843[25]
  return i842
}

Deserializers["ForcePortrait"] = function (request, data, root) {
  var i844 = root || request.c( 'ForcePortrait' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'canvasRoot')
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i847 = data
  i846.enabled = !!i847[0]
  i846.planeDistance = i847[1]
  i846.referencePixelsPerUnit = i847[2]
  i846.isFallbackOverlay = !!i847[3]
  i846.renderMode = i847[4]
  i846.renderOrder = i847[5]
  i846.sortingLayerName = i847[6]
  i846.sortingOrder = i847[7]
  i846.scaleFactor = i847[8]
  request.r(i847[9], i847[10], 0, i846, 'worldCamera')
  i846.overrideSorting = !!i847[11]
  i846.pixelPerfect = !!i847[12]
  i846.targetDisplay = i847[13]
  i846.overridePixelPerfect = !!i847[14]
  return i846
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i849 = data
  i848.m_UiScaleMode = i849[0]
  i848.m_ReferencePixelsPerUnit = i849[1]
  i848.m_ScaleFactor = i849[2]
  i848.m_ReferenceResolution = new pc.Vec2( i849[3], i849[4] )
  i848.m_ScreenMatchMode = i849[5]
  i848.m_MatchWidthOrHeight = i849[6]
  i848.m_PhysicalUnit = i849[7]
  i848.m_FallbackScreenDPI = i849[8]
  i848.m_DefaultSpriteDPI = i849[9]
  i848.m_DynamicPixelsPerUnit = i849[10]
  i848.m_PresetInfoIsWorld = !!i849[11]
  return i848
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i851 = data
  i850.m_IgnoreReversedGraphics = !!i851[0]
  i850.m_BlockingObjects = i851[1]
  i850.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i851[2] )
  return i850
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'm_Texture')
  i852.m_UVRect = UnityEngine.Rect.MinMaxRect(i853[2], i853[3], i853[4], i853[5])
  request.r(i853[6], i853[7], 0, i852, 'm_Material')
  i852.m_Maskable = !!i853[8]
  i852.m_Color = new pc.Color(i853[9], i853[10], i853[11], i853[12])
  i852.m_RaycastTarget = !!i853[13]
  i852.m_RaycastPadding = new pc.Vec4( i853[14], i853[15], i853[16], i853[17] )
  return i852
}

Deserializers["DragAndDrop.DragAndDropArtillery"] = function (request, data, root) {
  var i854 = root || request.c( 'DragAndDrop.DragAndDropArtillery' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, '_spritArtillery')
  var i857 = i855[2]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i854._ridingHands = i856
  request.r(i855[3], i855[4], 0, i854, '_timeController')
  request.r(i855[5], i855[6], 0, i854, '_spawnLocation')
  request.r(i855[7], i855[8], 0, i854, '_spawnLocation2')
  return i854
}

Deserializers["RidingHand"] = function (request, data, root) {
  var i860 = root || request.c( 'RidingHand' )
  var i861 = data
  i860._speed = i861[0]
  i860._height = i861[1]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i863 = data
  i862.usedByComposite = !!i863[0]
  i862.autoTiling = !!i863[1]
  i862.size = new pc.Vec2( i863[2], i863[3] )
  i862.edgeRadius = i863[4]
  i862.enabled = !!i863[5]
  i862.isTrigger = !!i863[6]
  i862.usedByEffector = !!i863[7]
  i862.density = i863[8]
  i862.offset = new pc.Vec2( i863[9], i863[10] )
  request.r(i863[11], i863[12], 0, i862, 'material')
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i865 = data
  i864.bodyType = i865[0]
  request.r(i865[1], i865[2], 0, i864, 'material')
  i864.simulated = !!i865[3]
  i864.useAutoMass = !!i865[4]
  i864.mass = i865[5]
  i864.drag = i865[6]
  i864.angularDrag = i865[7]
  i864.gravityScale = i865[8]
  i864.collisionDetectionMode = i865[9]
  i864.sleepMode = i865[10]
  i864.constraints = i865[11]
  return i864
}

Deserializers["Spawnlocation"] = function (request, data, root) {
  var i866 = root || request.c( 'Spawnlocation' )
  var i867 = data
  return i866
}

Deserializers["ThrobbingHand"] = function (request, data, root) {
  var i868 = root || request.c( 'ThrobbingHand' )
  var i869 = data
  i868.scaleSpeed = i869[0]
  i868.scaleAmount = i869[1]
  request.r(i869[2], i869[3], 0, i868, '_button')
  request.r(i869[4], i869[5], 0, i868, '_timeController')
  request.r(i869[6], i869[7], 0, i868, '_pumpingButton')
  return i868
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.UI.Button' )
  var i871 = data
  i870.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i871[0], i870.m_OnClick)
  i870.m_Navigation = request.d('UnityEngine.UI.Navigation', i871[1], i870.m_Navigation)
  i870.m_Transition = i871[2]
  i870.m_Colors = request.d('UnityEngine.UI.ColorBlock', i871[3], i870.m_Colors)
  i870.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i871[4], i870.m_SpriteState)
  i870.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i871[5], i870.m_AnimationTriggers)
  i870.m_Interactable = !!i871[6]
  request.r(i871[7], i871[8], 0, i870, 'm_TargetGraphic')
  return i870
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i873 = data
  i872.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i873[0], i872.m_PersistentCalls)
  return i872
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i875 = data
  var i877 = i875[0]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i877.length; i += 1) {
    i876.add(request.d('UnityEngine.Events.PersistentCall', i877[i + 0]));
  }
  i874.m_Calls = i876
  return i874
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'm_Target')
  i880.m_TargetAssemblyTypeName = i881[2]
  i880.m_MethodName = i881[3]
  i880.m_Mode = i881[4]
  i880.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i881[5], i880.m_Arguments)
  i880.m_CallState = i881[6]
  return i880
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i883 = data
  i882.m_Mode = i883[0]
  i882.m_WrapAround = !!i883[1]
  request.r(i883[2], i883[3], 0, i882, 'm_SelectOnUp')
  request.r(i883[4], i883[5], 0, i882, 'm_SelectOnDown')
  request.r(i883[6], i883[7], 0, i882, 'm_SelectOnLeft')
  request.r(i883[8], i883[9], 0, i882, 'm_SelectOnRight')
  return i882
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i885 = data
  i884.m_NormalColor = new pc.Color(i885[0], i885[1], i885[2], i885[3])
  i884.m_HighlightedColor = new pc.Color(i885[4], i885[5], i885[6], i885[7])
  i884.m_PressedColor = new pc.Color(i885[8], i885[9], i885[10], i885[11])
  i884.m_SelectedColor = new pc.Color(i885[12], i885[13], i885[14], i885[15])
  i884.m_DisabledColor = new pc.Color(i885[16], i885[17], i885[18], i885[19])
  i884.m_ColorMultiplier = i885[20]
  i884.m_FadeDuration = i885[21]
  return i884
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'm_HighlightedSprite')
  request.r(i887[2], i887[3], 0, i886, 'm_PressedSprite')
  request.r(i887[4], i887[5], 0, i886, 'm_SelectedSprite')
  request.r(i887[6], i887[7], 0, i886, 'm_DisabledSprite')
  return i886
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i889 = data
  i888.m_NormalTrigger = i889[0]
  i888.m_HighlightedTrigger = i889[1]
  i888.m_PressedTrigger = i889[2]
  i888.m_SelectedTrigger = i889[3]
  i888.m_DisabledTrigger = i889[4]
  return i888
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'm_FirstSelected')
  i890.m_sendNavigationEvents = !!i891[2]
  i890.m_DragThreshold = i891[3]
  return i890
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i893 = data
  i892.m_HorizontalAxis = i893[0]
  i892.m_VerticalAxis = i893[1]
  i892.m_SubmitButton = i893[2]
  i892.m_CancelButton = i893[3]
  i892.m_InputActionsPerSecond = i893[4]
  i892.m_RepeatDelay = i893[5]
  i892.m_ForceModuleActive = !!i893[6]
  i892.m_SendPointerHoverToParent = !!i893[7]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.VideoPlayer"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.VideoPlayer' )
  var i895 = data
  i894.enabled = !!i895[0]
  i894.source = i895[1]
  request.r(i895[2], i895[3], 0, i894, 'clip')
  i894.url = i895[4]
  i894.playOnAwake = !!i895[5]
  i894.isLooping = !!i895[6]
  i894.renderMode = i895[7]
  request.r(i895[8], i895[9], 0, i894, 'targetTexture')
  request.r(i895[10], i895[11], 0, i894, 'targetMaterialRenderer')
  i894.targetMaterialProperty = i895[12]
  i894.playbackSpeed = i895[13]
  return i894
}

Deserializers["TimeController"] = function (request, data, root) {
  var i896 = root || request.c( 'TimeController' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, '_timer')
  request.r(i897[2], i897[3], 0, i896, '_videoPlayer')
  request.r(i897[4], i897[5], 0, i896, '_slidingHand1')
  request.r(i897[6], i897[7], 0, i896, '_slidingHand2')
  request.r(i897[8], i897[9], 0, i896, '_slidingHand3')
  request.r(i897[10], i897[11], 0, i896, '_pumping1')
  request.r(i897[12], i897[13], 0, i896, '_pumping2')
  request.r(i897[14], i897[15], 0, i896, '_dragAndDropArtillery1')
  request.r(i897[16], i897[17], 0, i896, '_dragAndDropArtillery2')
  request.r(i897[18], i897[19], 0, i896, '_dragAndDropArtillery3')
  return i896
}

Deserializers["Timer"] = function (request, data, root) {
  var i898 = root || request.c( 'Timer' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, '_icons')
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i901 = data
  i900.ambientIntensity = i901[0]
  i900.reflectionIntensity = i901[1]
  i900.ambientMode = i901[2]
  i900.ambientLight = new pc.Color(i901[3], i901[4], i901[5], i901[6])
  i900.ambientSkyColor = new pc.Color(i901[7], i901[8], i901[9], i901[10])
  i900.ambientGroundColor = new pc.Color(i901[11], i901[12], i901[13], i901[14])
  i900.ambientEquatorColor = new pc.Color(i901[15], i901[16], i901[17], i901[18])
  i900.fogColor = new pc.Color(i901[19], i901[20], i901[21], i901[22])
  i900.fogEndDistance = i901[23]
  i900.fogStartDistance = i901[24]
  i900.fogDensity = i901[25]
  i900.fog = !!i901[26]
  request.r(i901[27], i901[28], 0, i900, 'skybox')
  i900.fogMode = i901[29]
  var i903 = i901[30]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i903[i + 0]) );
  }
  i900.lightmaps = i902
  i900.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i901[31], i900.lightProbes)
  i900.lightmapsMode = i901[32]
  i900.mixedBakeMode = i901[33]
  i900.environmentLightingMode = i901[34]
  i900.ambientProbe = new pc.SphericalHarmonicsL2(i901[35])
  i900.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i901[36])
  i900.useReferenceAmbientProbe = !!i901[37]
  request.r(i901[38], i901[39], 0, i900, 'customReflection')
  request.r(i901[40], i901[41], 0, i900, 'defaultReflection')
  i900.defaultReflectionMode = i901[42]
  i900.defaultReflectionResolution = i901[43]
  i900.sunLightObjectId = i901[44]
  i900.pixelLightCount = i901[45]
  i900.defaultReflectionHDR = !!i901[46]
  i900.hasLightDataAsset = !!i901[47]
  i900.hasManualGenerate = !!i901[48]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'lightmapColor')
  request.r(i907[2], i907[3], 0, i906, 'lightmapDirection')
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i908 = root || new UnityEngine.LightProbes()
  var i909 = data
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i916 = root || new pc.UnityMaterial()
  var i917 = data
  i916.name = i917[0]
  request.r(i917[1], i917[2], 0, i916, 'shader')
  i916.renderQueue = i917[3]
  i916.enableInstancing = !!i917[4]
  var i919 = i917[5]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i919[i + 0]) );
  }
  i916.floatParameters = i918
  var i921 = i917[6]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i921[i + 0]) );
  }
  i916.colorParameters = i920
  var i923 = i917[7]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i923[i + 0]) );
  }
  i916.vectorParameters = i922
  var i925 = i917[8]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i925[i + 0]) );
  }
  i916.textureParameters = i924
  var i927 = i917[9]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i927[i + 0]) );
  }
  i916.materialFlags = i926
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i931 = data
  i930.name = i931[0]
  i930.value = i931[1]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i935 = data
  i934.name = i935[0]
  i934.value = new pc.Color(i935[1], i935[2], i935[3], i935[4])
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i939 = data
  i938.name = i939[0]
  i938.value = new pc.Vec4( i939[1], i939[2], i939[3], i939[4] )
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i943 = data
  i942.name = i943[0]
  request.r(i943[1], i943[2], 0, i942, 'value')
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i947 = data
  i946.name = i947[0]
  i946.enabled = !!i947[1]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i949 = data
  var i951 = i949[0]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i951.length; i += 1) {
    i950.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i951[i + 0]));
  }
  i948.ShaderCompilationErrors = i950
  i948.name = i949[1]
  i948.guid = i949[2]
  var i953 = i949[3]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( i953[i + 0] );
  }
  i948.shaderDefinedKeywords = i952
  var i955 = i949[4]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i955[i + 0]) );
  }
  i948.passes = i954
  var i957 = i949[5]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i957[i + 0]) );
  }
  i948.usePasses = i956
  var i959 = i949[6]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i959[i + 0]) );
  }
  i948.defaultParameterValues = i958
  request.r(i949[7], i949[8], 0, i948, 'unityFallbackShader')
  i948.readDepth = !!i949[9]
  i948.isCreatedByShaderGraph = !!i949[10]
  i948.compiled = !!i949[11]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i963 = data
  i962.shaderName = i963[0]
  i962.errorMessage = i963[1]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i968 = root || new pc.UnityShaderPass()
  var i969 = data
  i968.id = i969[0]
  i968.subShaderIndex = i969[1]
  i968.name = i969[2]
  i968.passType = i969[3]
  i968.grabPassTextureName = i969[4]
  i968.usePass = !!i969[5]
  i968.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[6], i968.zTest)
  i968.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[7], i968.zWrite)
  i968.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[8], i968.culling)
  i968.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i969[9], i968.blending)
  i968.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i969[10], i968.alphaBlending)
  i968.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[11], i968.colorWriteMask)
  i968.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[12], i968.offsetUnits)
  i968.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[13], i968.offsetFactor)
  i968.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[14], i968.stencilRef)
  i968.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[15], i968.stencilReadMask)
  i968.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[16], i968.stencilWriteMask)
  i968.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i969[17], i968.stencilOp)
  i968.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i969[18], i968.stencilOpFront)
  i968.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i969[19], i968.stencilOpBack)
  var i971 = i969[20]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i971[i + 0]) );
  }
  i968.tags = i970
  var i973 = i969[21]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( i973[i + 0] );
  }
  i968.passDefinedKeywords = i972
  var i975 = i969[22]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i975[i + 0]) );
  }
  i968.passDefinedKeywordGroups = i974
  var i977 = i969[23]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i977[i + 0]) );
  }
  i968.variants = i976
  var i979 = i969[24]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i979[i + 0]) );
  }
  i968.excludedVariants = i978
  i968.hasDepthReader = !!i969[25]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i981 = data
  i980.val = i981[0]
  i980.name = i981[1]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i983 = data
  i982.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[0], i982.src)
  i982.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[1], i982.dst)
  i982.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[2], i982.op)
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i985 = data
  i984.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[0], i984.pass)
  i984.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[1], i984.fail)
  i984.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[2], i984.zFail)
  i984.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[3], i984.comp)
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i989 = data
  i988.name = i989[0]
  i988.value = i989[1]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i993 = data
  var i995 = i993[0]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( i995[i + 0] );
  }
  i992.keywords = i994
  i992.hasDiscard = !!i993[1]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i999 = data
  i998.passId = i999[0]
  i998.subShaderIndex = i999[1]
  var i1001 = i999[2]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( i1001[i + 0] );
  }
  i998.keywords = i1000
  i998.vertexProgram = i999[3]
  i998.fragmentProgram = i999[4]
  i998.exportedForWebGl2 = !!i999[5]
  i998.readDepth = !!i999[6]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'shader')
  i1004.pass = i1005[2]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1009 = data
  i1008.name = i1009[0]
  i1008.type = i1009[1]
  i1008.value = new pc.Vec4( i1009[2], i1009[3], i1009[4], i1009[5] )
  i1008.textureValue = i1009[6]
  i1008.shaderPropertyFlag = i1009[7]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1011 = data
  i1010.name = i1011[0]
  request.r(i1011[1], i1011[2], 0, i1010, 'texture')
  i1010.aabb = i1011[3]
  i1010.vertices = i1011[4]
  i1010.triangles = i1011[5]
  i1010.textureRect = UnityEngine.Rect.MinMaxRect(i1011[6], i1011[7], i1011[8], i1011[9])
  i1010.packedRect = UnityEngine.Rect.MinMaxRect(i1011[10], i1011[11], i1011[12], i1011[13])
  i1010.border = new pc.Vec4( i1011[14], i1011[15], i1011[16], i1011[17] )
  i1010.transparency = i1011[18]
  i1010.bounds = i1011[19]
  i1010.pixelsPerUnit = i1011[20]
  i1010.textureWidth = i1011[21]
  i1010.textureHeight = i1011[22]
  i1010.nativeSize = new pc.Vec2( i1011[23], i1011[24] )
  i1010.pivot = new pc.Vec2( i1011[25], i1011[26] )
  i1010.textureRectOffset = new pc.Vec2( i1011[27], i1011[28] )
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.VideoClip"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.VideoClip' )
  var i1013 = data
  i1012.name = i1013[0]
  i1012.width = i1013[1]
  i1012.height = i1013[2]
  i1012.frameRate = i1013[3]
  i1012.frameCount = System.UInt64(i1013[4])
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1015 = data
  var i1017 = i1015[0]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1017[i + 0]) );
  }
  i1014.files = i1016
  i1014.componentToPrefabIds = i1015[1]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1021 = data
  i1020.path = i1021[0]
  request.r(i1021[1], i1021[2], 0, i1020, 'unityObject')
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1023 = data
  var i1025 = i1023[0]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1025[i + 0]) );
  }
  i1022.scriptsExecutionOrder = i1024
  var i1027 = i1023[1]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1027[i + 0]) );
  }
  i1022.sortingLayers = i1026
  var i1029 = i1023[2]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1029[i + 0]) );
  }
  i1022.cullingLayers = i1028
  i1022.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1023[3], i1022.timeSettings)
  i1022.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1023[4], i1022.physicsSettings)
  i1022.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1023[5], i1022.physics2DSettings)
  i1022.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1023[6], i1022.qualitySettings)
  i1022.enableRealtimeShadows = !!i1023[7]
  i1022.enableAutoInstancing = !!i1023[8]
  i1022.enableDynamicBatching = !!i1023[9]
  i1022.lightmapEncodingQuality = i1023[10]
  i1022.desiredColorSpace = i1023[11]
  var i1031 = i1023[12]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( i1031[i + 0] );
  }
  i1022.allTags = i1030
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1035 = data
  i1034.name = i1035[0]
  i1034.value = i1035[1]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1039 = data
  i1038.id = i1039[0]
  i1038.name = i1039[1]
  i1038.value = i1039[2]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1043 = data
  i1042.id = i1043[0]
  i1042.name = i1043[1]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1045 = data
  i1044.fixedDeltaTime = i1045[0]
  i1044.maximumDeltaTime = i1045[1]
  i1044.timeScale = i1045[2]
  i1044.maximumParticleTimestep = i1045[3]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1047 = data
  i1046.gravity = new pc.Vec3( i1047[0], i1047[1], i1047[2] )
  i1046.defaultSolverIterations = i1047[3]
  i1046.bounceThreshold = i1047[4]
  i1046.autoSyncTransforms = !!i1047[5]
  i1046.autoSimulation = !!i1047[6]
  var i1049 = i1047[7]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1049[i + 0]) );
  }
  i1046.collisionMatrix = i1048
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1053 = data
  i1052.enabled = !!i1053[0]
  i1052.layerId = i1053[1]
  i1052.otherLayerId = i1053[2]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1055 = data
  request.r(i1055[0], i1055[1], 0, i1054, 'material')
  i1054.gravity = new pc.Vec2( i1055[2], i1055[3] )
  i1054.positionIterations = i1055[4]
  i1054.velocityIterations = i1055[5]
  i1054.velocityThreshold = i1055[6]
  i1054.maxLinearCorrection = i1055[7]
  i1054.maxAngularCorrection = i1055[8]
  i1054.maxTranslationSpeed = i1055[9]
  i1054.maxRotationSpeed = i1055[10]
  i1054.baumgarteScale = i1055[11]
  i1054.baumgarteTOIScale = i1055[12]
  i1054.timeToSleep = i1055[13]
  i1054.linearSleepTolerance = i1055[14]
  i1054.angularSleepTolerance = i1055[15]
  i1054.defaultContactOffset = i1055[16]
  i1054.autoSimulation = !!i1055[17]
  i1054.queriesHitTriggers = !!i1055[18]
  i1054.queriesStartInColliders = !!i1055[19]
  i1054.callbacksOnDisable = !!i1055[20]
  i1054.reuseCollisionCallbacks = !!i1055[21]
  i1054.autoSyncTransforms = !!i1055[22]
  var i1057 = i1055[23]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1057[i + 0]) );
  }
  i1054.collisionMatrix = i1056
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1061 = data
  i1060.enabled = !!i1061[0]
  i1060.layerId = i1061[1]
  i1060.otherLayerId = i1061[2]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1063 = data
  var i1065 = i1063[0]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1065[i + 0]) );
  }
  i1062.qualityLevels = i1064
  var i1067 = i1063[1]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( i1067[i + 0] );
  }
  i1062.names = i1066
  i1062.shadows = i1063[2]
  i1062.anisotropicFiltering = i1063[3]
  i1062.antiAliasing = i1063[4]
  i1062.lodBias = i1063[5]
  i1062.shadowCascades = i1063[6]
  i1062.shadowDistance = i1063[7]
  i1062.shadowmaskMode = i1063[8]
  i1062.shadowProjection = i1063[9]
  i1062.shadowResolution = i1063[10]
  i1062.softParticles = !!i1063[11]
  i1062.softVegetation = !!i1063[12]
  i1062.activeColorSpace = i1063[13]
  i1062.desiredColorSpace = i1063[14]
  i1062.masterTextureLimit = i1063[15]
  i1062.maxQueuedFrames = i1063[16]
  i1062.particleRaycastBudget = i1063[17]
  i1062.pixelLightCount = i1063[18]
  i1062.realtimeReflectionProbes = !!i1063[19]
  i1062.shadowCascade2Split = i1063[20]
  i1062.shadowCascade4Split = new pc.Vec3( i1063[21], i1063[22], i1063[23] )
  i1062.streamingMipmapsActive = !!i1063[24]
  i1062.vSyncCount = i1063[25]
  i1062.asyncUploadBufferSize = i1063[26]
  i1062.asyncUploadTimeSlice = i1063[27]
  i1062.billboardsFaceCameraPosition = !!i1063[28]
  i1062.shadowNearPlaneOffset = i1063[29]
  i1062.streamingMipmapsMemoryBudget = i1063[30]
  i1062.maximumLODLevel = i1063[31]
  i1062.streamingMipmapsAddAllCameras = !!i1063[32]
  i1062.streamingMipmapsMaxLevelReduction = i1063[33]
  i1062.streamingMipmapsRenderersPerFrame = i1063[34]
  i1062.resolutionScalingFixedDPIFactor = i1063[35]
  i1062.streamingMipmapsMaxFileIORequests = i1063[36]
  i1062.currentQualityLevel = i1063[37]
  return i1062
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1070 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'm_ObjectArgument')
  i1070.m_ObjectArgumentAssemblyTypeName = i1071[2]
  i1070.m_IntArgument = i1071[3]
  i1070.m_FloatArgument = i1071[4]
  i1070.m_StringArgument = i1071[5]
  i1070.m_BoolArgument = !!i1071[6]
  return i1070
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"colorFormat":6,"depthStencilFormat":7,"renderTextureFormat":8,"depth":9,"wrapU":10,"wrapV":11},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.VideoPlayer":{"enabled":0,"source":1,"clip":2,"url":4,"playOnAwake":5,"isLooping":6,"renderMode":7,"targetTexture":8,"targetMaterialRenderer":10,"targetMaterialProperty":12,"playbackSpeed":13},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.VideoClip":{"name":0,"width":1,"height":2,"frameRate":3,"frameCount":4},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"31":[32],"33":[32],"34":[32],"35":[32],"36":[32],"37":[32],"38":[39],"40":[6],"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[42],"49":[20],"50":[20],"51":[20],"52":[20],"53":[20],"54":[20],"55":[20],"56":[20],"57":[20],"58":[20],"59":[20],"60":[20],"61":[20],"62":[6],"63":[64],"65":[66],"67":[66],"10":[0],"68":[69],"70":[71],"72":[69],"73":[0],"74":[0],"12":[10],"3":[1,0],"75":[0],"11":[10],"76":[0],"77":[0],"78":[0],"79":[0],"80":[0],"81":[0],"82":[0],"83":[0],"84":[0],"13":[1,0],"85":[0],"86":[0],"87":[0],"88":[0],"89":[1,0],"90":[0],"91":[24],"92":[24],"25":[24],"93":[24],"94":[6],"95":[6],"96":[97],"98":[6],"99":[0],"100":[64,0],"101":[0,1],"102":[0],"103":[1,0],"104":[64],"105":[1,0],"106":[0],"107":[69]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","ForcePortrait","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.RawImage","UnityEngine.RenderTexture","DragAndDrop.DragAndDropArtillery","RidingHand","TimeController","Spawnlocation","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","ThrobbingHand","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Video.VideoPlayer","UnityEngine.Video.VideoClip","Timer","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.7f1";

Deserializers.productName = "Artilery2.0";

Deserializers.lunaInitializationTime = "04/04/2025 13:22:27";

Deserializers.lunaDaysRunning = "2.8";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "vfrfv3";

Deserializers.lunaAppID = "0";

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

Deserializers.buildID = "f15e64a3-9cec-4fe9-8e67-7044fb02f27c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

