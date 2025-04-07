var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i268 = root || request.c( 'UnityEngine.JointSpring' )
  var i269 = data
  i268.spring = i269[0]
  i268.damper = i269[1]
  i268.targetPosition = i269[2]
  return i268
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i270 = root || request.c( 'UnityEngine.JointMotor' )
  var i271 = data
  i270.m_TargetVelocity = i271[0]
  i270.m_Force = i271[1]
  i270.m_FreeSpin = i271[2]
  return i270
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i272 = root || request.c( 'UnityEngine.JointLimits' )
  var i273 = data
  i272.m_Min = i273[0]
  i272.m_Max = i273[1]
  i272.m_Bounciness = i273[2]
  i272.m_BounceMinVelocity = i273[3]
  i272.m_ContactDistance = i273[4]
  i272.minBounce = i273[5]
  i272.maxBounce = i273[6]
  return i272
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i274 = root || request.c( 'UnityEngine.JointDrive' )
  var i275 = data
  i274.m_PositionSpring = i275[0]
  i274.m_PositionDamper = i275[1]
  i274.m_MaximumForce = i275[2]
  i274.m_UseAcceleration = i275[3]
  return i274
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i276 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i277 = data
  i276.m_Spring = i277[0]
  i276.m_Damper = i277[1]
  return i276
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i278 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i279 = data
  i278.m_Limit = i279[0]
  i278.m_Bounciness = i279[1]
  i278.m_ContactDistance = i279[2]
  return i278
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i280 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i281 = data
  i280.m_ExtremumSlip = i281[0]
  i280.m_ExtremumValue = i281[1]
  i280.m_AsymptoteSlip = i281[2]
  i280.m_AsymptoteValue = i281[3]
  i280.m_Stiffness = i281[4]
  return i280
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i282 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i283 = data
  i282.m_LowerAngle = i283[0]
  i282.m_UpperAngle = i283[1]
  return i282
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i284 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i285 = data
  i284.m_MotorSpeed = i285[0]
  i284.m_MaximumMotorTorque = i285[1]
  return i284
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i286 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i287 = data
  i286.m_DampingRatio = i287[0]
  i286.m_Frequency = i287[1]
  i286.m_Angle = i287[2]
  return i286
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i288 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i289 = data
  i288.m_LowerTranslation = i289[0]
  i288.m_UpperTranslation = i289[1]
  return i288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i291 = data
  i290.pivot = new pc.Vec2( i291[0], i291[1] )
  i290.anchorMin = new pc.Vec2( i291[2], i291[3] )
  i290.anchorMax = new pc.Vec2( i291[4], i291[5] )
  i290.sizeDelta = new pc.Vec2( i291[6], i291[7] )
  i290.anchoredPosition3D = new pc.Vec3( i291[8], i291[9], i291[10] )
  i290.rotation = new pc.Quat(i291[11], i291[12], i291[13], i291[14])
  i290.scale = new pc.Vec3( i291[15], i291[16], i291[17] )
  return i290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i293 = data
  i292.cullTransparentMesh = !!i293[0]
  return i292
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i294 = root || request.c( 'UnityEngine.UI.Image' )
  var i295 = data
  request.r(i295[0], i295[1], 0, i294, 'm_Sprite')
  i294.m_Type = i295[2]
  i294.m_PreserveAspect = !!i295[3]
  i294.m_FillCenter = !!i295[4]
  i294.m_FillMethod = i295[5]
  i294.m_FillAmount = i295[6]
  i294.m_FillClockwise = !!i295[7]
  i294.m_FillOrigin = i295[8]
  i294.m_UseSpriteMesh = !!i295[9]
  i294.m_PixelsPerUnitMultiplier = i295[10]
  request.r(i295[11], i295[12], 0, i294, 'm_Material')
  i294.m_Maskable = !!i295[13]
  i294.m_Color = new pc.Color(i295[14], i295[15], i295[16], i295[17])
  i294.m_RaycastTarget = !!i295[18]
  i294.m_RaycastPadding = new pc.Vec4( i295[19], i295[20], i295[21], i295[22] )
  return i294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i297 = data
  i296.name = i297[0]
  i296.tagId = i297[1]
  i296.enabled = !!i297[2]
  i296.isStatic = !!i297[3]
  i296.layer = i297[4]
  return i296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i299 = data
  i298.name = i299[0]
  i298.width = i299[1]
  i298.height = i299[2]
  i298.mipmapCount = i299[3]
  i298.anisoLevel = i299[4]
  i298.filterMode = i299[5]
  i298.hdr = !!i299[6]
  i298.format = i299[7]
  i298.wrapMode = i299[8]
  i298.alphaIsTransparency = !!i299[9]
  i298.alphaSource = i299[10]
  i298.graphicsFormat = i299[11]
  i298.sRGBTexture = !!i299[12]
  i298.desiredColorSpace = i299[13]
  i298.wrapU = i299[14]
  i298.wrapV = i299[15]
  return i298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i301 = data
  i300.name = i301[0]
  i300.width = i301[1]
  i300.height = i301[2]
  i300.anisoLevel = i301[3]
  i300.filterMode = i301[4]
  i300.hdr = !!i301[5]
  i300.colorFormat = i301[6]
  i300.depthStencilFormat = i301[7]
  i300.renderTextureFormat = i301[8]
  i300.depth = i301[9]
  i300.wrapU = i301[10]
  i300.wrapV = i301[11]
  return i300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i303 = data
  i302.name = i303[0]
  i302.index = i303[1]
  i302.startup = !!i303[2]
  return i302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i305 = data
  i304.position = new pc.Vec3( i305[0], i305[1], i305[2] )
  i304.scale = new pc.Vec3( i305[3], i305[4], i305[5] )
  i304.rotation = new pc.Quat(i305[6], i305[7], i305[8], i305[9])
  return i304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i307 = data
  i306.enabled = !!i307[0]
  i306.aspect = i307[1]
  i306.orthographic = !!i307[2]
  i306.orthographicSize = i307[3]
  i306.backgroundColor = new pc.Color(i307[4], i307[5], i307[6], i307[7])
  i306.nearClipPlane = i307[8]
  i306.farClipPlane = i307[9]
  i306.fieldOfView = i307[10]
  i306.depth = i307[11]
  i306.clearFlags = i307[12]
  i306.cullingMask = i307[13]
  i306.rect = i307[14]
  request.r(i307[15], i307[16], 0, i306, 'targetTexture')
  i306.usePhysicalProperties = !!i307[17]
  i306.focalLength = i307[18]
  i306.sensorSize = new pc.Vec2( i307[19], i307[20] )
  i306.lensShift = new pc.Vec2( i307[21], i307[22] )
  i306.gateFit = i307[23]
  i306.commandBufferCount = i307[24]
  i306.cameraType = i307[25]
  return i306
}

Deserializers["ForcePortrait"] = function (request, data, root) {
  var i308 = root || request.c( 'ForcePortrait' )
  var i309 = data
  request.r(i309[0], i309[1], 0, i308, 'canvasRoot')
  return i308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i311 = data
  i310.enabled = !!i311[0]
  i310.planeDistance = i311[1]
  i310.referencePixelsPerUnit = i311[2]
  i310.isFallbackOverlay = !!i311[3]
  i310.renderMode = i311[4]
  i310.renderOrder = i311[5]
  i310.sortingLayerName = i311[6]
  i310.sortingOrder = i311[7]
  i310.scaleFactor = i311[8]
  request.r(i311[9], i311[10], 0, i310, 'worldCamera')
  i310.overrideSorting = !!i311[11]
  i310.pixelPerfect = !!i311[12]
  i310.targetDisplay = i311[13]
  i310.overridePixelPerfect = !!i311[14]
  return i310
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i312 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i313 = data
  i312.m_UiScaleMode = i313[0]
  i312.m_ReferencePixelsPerUnit = i313[1]
  i312.m_ScaleFactor = i313[2]
  i312.m_ReferenceResolution = new pc.Vec2( i313[3], i313[4] )
  i312.m_ScreenMatchMode = i313[5]
  i312.m_MatchWidthOrHeight = i313[6]
  i312.m_PhysicalUnit = i313[7]
  i312.m_FallbackScreenDPI = i313[8]
  i312.m_DefaultSpriteDPI = i313[9]
  i312.m_DynamicPixelsPerUnit = i313[10]
  i312.m_PresetInfoIsWorld = !!i313[11]
  return i312
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i314 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i315 = data
  i314.m_IgnoreReversedGraphics = !!i315[0]
  i314.m_BlockingObjects = i315[1]
  i314.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i315[2] )
  return i314
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i316 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i317 = data
  request.r(i317[0], i317[1], 0, i316, 'm_Texture')
  i316.m_UVRect = UnityEngine.Rect.MinMaxRect(i317[2], i317[3], i317[4], i317[5])
  request.r(i317[6], i317[7], 0, i316, 'm_Material')
  i316.m_Maskable = !!i317[8]
  i316.m_Color = new pc.Color(i317[9], i317[10], i317[11], i317[12])
  i316.m_RaycastTarget = !!i317[13]
  i316.m_RaycastPadding = new pc.Vec4( i317[14], i317[15], i317[16], i317[17] )
  return i316
}

Deserializers["DragAndDrop.DragAndDropArtillery"] = function (request, data, root) {
  var i318 = root || request.c( 'DragAndDrop.DragAndDropArtillery' )
  var i319 = data
  request.r(i319[0], i319[1], 0, i318, '_spritArtillery')
  var i321 = i319[2]
  var i320 = []
  for(var i = 0; i < i321.length; i += 2) {
  request.r(i321[i + 0], i321[i + 1], 2, i320, '')
  }
  i318._ridingHands = i320
  request.r(i319[3], i319[4], 0, i318, '_timeController')
  request.r(i319[5], i319[6], 0, i318, '_spawnLocation')
  request.r(i319[7], i319[8], 0, i318, '_spawnLocation2')
  return i318
}

Deserializers["RidingHand"] = function (request, data, root) {
  var i324 = root || request.c( 'RidingHand' )
  var i325 = data
  i324._speed = i325[0]
  i324._height = i325[1]
  return i324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i327 = data
  i326.usedByComposite = !!i327[0]
  i326.autoTiling = !!i327[1]
  i326.size = new pc.Vec2( i327[2], i327[3] )
  i326.edgeRadius = i327[4]
  i326.enabled = !!i327[5]
  i326.isTrigger = !!i327[6]
  i326.usedByEffector = !!i327[7]
  i326.density = i327[8]
  i326.offset = new pc.Vec2( i327[9], i327[10] )
  request.r(i327[11], i327[12], 0, i326, 'material')
  return i326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i329 = data
  i328.bodyType = i329[0]
  request.r(i329[1], i329[2], 0, i328, 'material')
  i328.simulated = !!i329[3]
  i328.useAutoMass = !!i329[4]
  i328.mass = i329[5]
  i328.drag = i329[6]
  i328.angularDrag = i329[7]
  i328.gravityScale = i329[8]
  i328.collisionDetectionMode = i329[9]
  i328.sleepMode = i329[10]
  i328.constraints = i329[11]
  return i328
}

Deserializers["Spawnlocation"] = function (request, data, root) {
  var i330 = root || request.c( 'Spawnlocation' )
  var i331 = data
  return i330
}

Deserializers["ThrobbingHand"] = function (request, data, root) {
  var i332 = root || request.c( 'ThrobbingHand' )
  var i333 = data
  i332.scaleSpeed = i333[0]
  i332.scaleAmount = i333[1]
  request.r(i333[2], i333[3], 0, i332, '_button')
  request.r(i333[4], i333[5], 0, i332, '_timeController')
  request.r(i333[6], i333[7], 0, i332, '_pumpingButton')
  return i332
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i334 = root || request.c( 'UnityEngine.UI.Button' )
  var i335 = data
  i334.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i335[0], i334.m_OnClick)
  i334.m_Navigation = request.d('UnityEngine.UI.Navigation', i335[1], i334.m_Navigation)
  i334.m_Transition = i335[2]
  i334.m_Colors = request.d('UnityEngine.UI.ColorBlock', i335[3], i334.m_Colors)
  i334.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i335[4], i334.m_SpriteState)
  i334.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i335[5], i334.m_AnimationTriggers)
  i334.m_Interactable = !!i335[6]
  request.r(i335[7], i335[8], 0, i334, 'm_TargetGraphic')
  return i334
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i336 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i337 = data
  i336.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i337[0], i336.m_PersistentCalls)
  return i336
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i338 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i339 = data
  var i341 = i339[0]
  var i340 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i341.length; i += 1) {
    i340.add(request.d('UnityEngine.Events.PersistentCall', i341[i + 0]));
  }
  i338.m_Calls = i340
  return i338
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i344 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i345 = data
  request.r(i345[0], i345[1], 0, i344, 'm_Target')
  i344.m_TargetAssemblyTypeName = i345[2]
  i344.m_MethodName = i345[3]
  i344.m_Mode = i345[4]
  i344.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i345[5], i344.m_Arguments)
  i344.m_CallState = i345[6]
  return i344
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i346 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i347 = data
  i346.m_Mode = i347[0]
  i346.m_WrapAround = !!i347[1]
  request.r(i347[2], i347[3], 0, i346, 'm_SelectOnUp')
  request.r(i347[4], i347[5], 0, i346, 'm_SelectOnDown')
  request.r(i347[6], i347[7], 0, i346, 'm_SelectOnLeft')
  request.r(i347[8], i347[9], 0, i346, 'm_SelectOnRight')
  return i346
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i348 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i349 = data
  i348.m_NormalColor = new pc.Color(i349[0], i349[1], i349[2], i349[3])
  i348.m_HighlightedColor = new pc.Color(i349[4], i349[5], i349[6], i349[7])
  i348.m_PressedColor = new pc.Color(i349[8], i349[9], i349[10], i349[11])
  i348.m_SelectedColor = new pc.Color(i349[12], i349[13], i349[14], i349[15])
  i348.m_DisabledColor = new pc.Color(i349[16], i349[17], i349[18], i349[19])
  i348.m_ColorMultiplier = i349[20]
  i348.m_FadeDuration = i349[21]
  return i348
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i350 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i351 = data
  request.r(i351[0], i351[1], 0, i350, 'm_HighlightedSprite')
  request.r(i351[2], i351[3], 0, i350, 'm_PressedSprite')
  request.r(i351[4], i351[5], 0, i350, 'm_SelectedSprite')
  request.r(i351[6], i351[7], 0, i350, 'm_DisabledSprite')
  return i350
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i352 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i353 = data
  i352.m_NormalTrigger = i353[0]
  i352.m_HighlightedTrigger = i353[1]
  i352.m_PressedTrigger = i353[2]
  i352.m_SelectedTrigger = i353[3]
  i352.m_DisabledTrigger = i353[4]
  return i352
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i354 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i355 = data
  request.r(i355[0], i355[1], 0, i354, 'm_FirstSelected')
  i354.m_sendNavigationEvents = !!i355[2]
  i354.m_DragThreshold = i355[3]
  return i354
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i356 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i357 = data
  i356.m_HorizontalAxis = i357[0]
  i356.m_VerticalAxis = i357[1]
  i356.m_SubmitButton = i357[2]
  i356.m_CancelButton = i357[3]
  i356.m_InputActionsPerSecond = i357[4]
  i356.m_RepeatDelay = i357[5]
  i356.m_ForceModuleActive = !!i357[6]
  i356.m_SendPointerHoverToParent = !!i357[7]
  return i356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.VideoPlayer"] = function (request, data, root) {
  var i358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.VideoPlayer' )
  var i359 = data
  i358.enabled = !!i359[0]
  i358.source = i359[1]
  request.r(i359[2], i359[3], 0, i358, 'clip')
  i358.url = i359[4]
  i358.playOnAwake = !!i359[5]
  i358.isLooping = !!i359[6]
  i358.renderMode = i359[7]
  request.r(i359[8], i359[9], 0, i358, 'targetTexture')
  request.r(i359[10], i359[11], 0, i358, 'targetMaterialRenderer')
  i358.targetMaterialProperty = i359[12]
  i358.playbackSpeed = i359[13]
  return i358
}

Deserializers["TimeController"] = function (request, data, root) {
  var i360 = root || request.c( 'TimeController' )
  var i361 = data
  request.r(i361[0], i361[1], 0, i360, '_timer')
  request.r(i361[2], i361[3], 0, i360, '_videoPlayer')
  request.r(i361[4], i361[5], 0, i360, '_slidingHand1')
  request.r(i361[6], i361[7], 0, i360, '_slidingHand2')
  request.r(i361[8], i361[9], 0, i360, '_slidingHand3')
  request.r(i361[10], i361[11], 0, i360, '_pumping1')
  request.r(i361[12], i361[13], 0, i360, '_pumping2')
  request.r(i361[14], i361[15], 0, i360, '_dragAndDropArtillery1')
  request.r(i361[16], i361[17], 0, i360, '_dragAndDropArtillery2')
  request.r(i361[18], i361[19], 0, i360, '_dragAndDropArtillery3')
  return i360
}

Deserializers["Timer"] = function (request, data, root) {
  var i362 = root || request.c( 'Timer' )
  var i363 = data
  request.r(i363[0], i363[1], 0, i362, '_icons')
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i365 = data
  i364.ambientIntensity = i365[0]
  i364.reflectionIntensity = i365[1]
  i364.ambientMode = i365[2]
  i364.ambientLight = new pc.Color(i365[3], i365[4], i365[5], i365[6])
  i364.ambientSkyColor = new pc.Color(i365[7], i365[8], i365[9], i365[10])
  i364.ambientGroundColor = new pc.Color(i365[11], i365[12], i365[13], i365[14])
  i364.ambientEquatorColor = new pc.Color(i365[15], i365[16], i365[17], i365[18])
  i364.fogColor = new pc.Color(i365[19], i365[20], i365[21], i365[22])
  i364.fogEndDistance = i365[23]
  i364.fogStartDistance = i365[24]
  i364.fogDensity = i365[25]
  i364.fog = !!i365[26]
  request.r(i365[27], i365[28], 0, i364, 'skybox')
  i364.fogMode = i365[29]
  var i367 = i365[30]
  var i366 = []
  for(var i = 0; i < i367.length; i += 1) {
    i366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i367[i + 0]) );
  }
  i364.lightmaps = i366
  i364.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i365[31], i364.lightProbes)
  i364.lightmapsMode = i365[32]
  i364.mixedBakeMode = i365[33]
  i364.environmentLightingMode = i365[34]
  i364.ambientProbe = new pc.SphericalHarmonicsL2(i365[35])
  i364.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i365[36])
  i364.useReferenceAmbientProbe = !!i365[37]
  request.r(i365[38], i365[39], 0, i364, 'customReflection')
  request.r(i365[40], i365[41], 0, i364, 'defaultReflection')
  i364.defaultReflectionMode = i365[42]
  i364.defaultReflectionResolution = i365[43]
  i364.sunLightObjectId = i365[44]
  i364.pixelLightCount = i365[45]
  i364.defaultReflectionHDR = !!i365[46]
  i364.hasLightDataAsset = !!i365[47]
  i364.hasManualGenerate = !!i365[48]
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i371 = data
  request.r(i371[0], i371[1], 0, i370, 'lightmapColor')
  request.r(i371[2], i371[3], 0, i370, 'lightmapDirection')
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i372 = root || new UnityEngine.LightProbes()
  var i373 = data
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i380 = root || new pc.UnityMaterial()
  var i381 = data
  i380.name = i381[0]
  request.r(i381[1], i381[2], 0, i380, 'shader')
  i380.renderQueue = i381[3]
  i380.enableInstancing = !!i381[4]
  var i383 = i381[5]
  var i382 = []
  for(var i = 0; i < i383.length; i += 1) {
    i382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i383[i + 0]) );
  }
  i380.floatParameters = i382
  var i385 = i381[6]
  var i384 = []
  for(var i = 0; i < i385.length; i += 1) {
    i384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i385[i + 0]) );
  }
  i380.colorParameters = i384
  var i387 = i381[7]
  var i386 = []
  for(var i = 0; i < i387.length; i += 1) {
    i386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i387[i + 0]) );
  }
  i380.vectorParameters = i386
  var i389 = i381[8]
  var i388 = []
  for(var i = 0; i < i389.length; i += 1) {
    i388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i389[i + 0]) );
  }
  i380.textureParameters = i388
  var i391 = i381[9]
  var i390 = []
  for(var i = 0; i < i391.length; i += 1) {
    i390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i391[i + 0]) );
  }
  i380.materialFlags = i390
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i395 = data
  i394.name = i395[0]
  i394.value = i395[1]
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i399 = data
  i398.name = i399[0]
  i398.value = new pc.Color(i399[1], i399[2], i399[3], i399[4])
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i403 = data
  i402.name = i403[0]
  i402.value = new pc.Vec4( i403[1], i403[2], i403[3], i403[4] )
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i407 = data
  i406.name = i407[0]
  request.r(i407[1], i407[2], 0, i406, 'value')
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i411 = data
  i410.name = i411[0]
  i410.enabled = !!i411[1]
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i413 = data
  var i415 = i413[0]
  var i414 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i415.length; i += 1) {
    i414.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i415[i + 0]));
  }
  i412.ShaderCompilationErrors = i414
  i412.name = i413[1]
  i412.guid = i413[2]
  var i417 = i413[3]
  var i416 = []
  for(var i = 0; i < i417.length; i += 1) {
    i416.push( i417[i + 0] );
  }
  i412.shaderDefinedKeywords = i416
  var i419 = i413[4]
  var i418 = []
  for(var i = 0; i < i419.length; i += 1) {
    i418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i419[i + 0]) );
  }
  i412.passes = i418
  var i421 = i413[5]
  var i420 = []
  for(var i = 0; i < i421.length; i += 1) {
    i420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i421[i + 0]) );
  }
  i412.usePasses = i420
  var i423 = i413[6]
  var i422 = []
  for(var i = 0; i < i423.length; i += 1) {
    i422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i423[i + 0]) );
  }
  i412.defaultParameterValues = i422
  request.r(i413[7], i413[8], 0, i412, 'unityFallbackShader')
  i412.readDepth = !!i413[9]
  i412.isCreatedByShaderGraph = !!i413[10]
  i412.compiled = !!i413[11]
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i427 = data
  i426.shaderName = i427[0]
  i426.errorMessage = i427[1]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i432 = root || new pc.UnityShaderPass()
  var i433 = data
  i432.id = i433[0]
  i432.subShaderIndex = i433[1]
  i432.name = i433[2]
  i432.passType = i433[3]
  i432.grabPassTextureName = i433[4]
  i432.usePass = !!i433[5]
  i432.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i433[6], i432.zTest)
  i432.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i433[7], i432.zWrite)
  i432.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i433[8], i432.culling)
  i432.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i433[9], i432.blending)
  i432.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i433[10], i432.alphaBlending)
  i432.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i433[11], i432.colorWriteMask)
  i432.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i433[12], i432.offsetUnits)
  i432.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i433[13], i432.offsetFactor)
  i432.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i433[14], i432.stencilRef)
  i432.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i433[15], i432.stencilReadMask)
  i432.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i433[16], i432.stencilWriteMask)
  i432.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i433[17], i432.stencilOp)
  i432.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i433[18], i432.stencilOpFront)
  i432.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i433[19], i432.stencilOpBack)
  var i435 = i433[20]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i435[i + 0]) );
  }
  i432.tags = i434
  var i437 = i433[21]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( i437[i + 0] );
  }
  i432.passDefinedKeywords = i436
  var i439 = i433[22]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i439[i + 0]) );
  }
  i432.passDefinedKeywordGroups = i438
  var i441 = i433[23]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i441[i + 0]) );
  }
  i432.variants = i440
  var i443 = i433[24]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i443[i + 0]) );
  }
  i432.excludedVariants = i442
  i432.hasDepthReader = !!i433[25]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i445 = data
  i444.val = i445[0]
  i444.name = i445[1]
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i447 = data
  i446.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i447[0], i446.src)
  i446.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i447[1], i446.dst)
  i446.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i447[2], i446.op)
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i449 = data
  i448.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[0], i448.pass)
  i448.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[1], i448.fail)
  i448.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[2], i448.zFail)
  i448.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[3], i448.comp)
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i453 = data
  i452.name = i453[0]
  i452.value = i453[1]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i457 = data
  var i459 = i457[0]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( i459[i + 0] );
  }
  i456.keywords = i458
  i456.hasDiscard = !!i457[1]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i463 = data
  i462.passId = i463[0]
  i462.subShaderIndex = i463[1]
  var i465 = i463[2]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( i465[i + 0] );
  }
  i462.keywords = i464
  i462.vertexProgram = i463[3]
  i462.fragmentProgram = i463[4]
  i462.exportedForWebGl2 = !!i463[5]
  i462.readDepth = !!i463[6]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i469 = data
  request.r(i469[0], i469[1], 0, i468, 'shader')
  i468.pass = i469[2]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i473 = data
  i472.name = i473[0]
  i472.type = i473[1]
  i472.value = new pc.Vec4( i473[2], i473[3], i473[4], i473[5] )
  i472.textureValue = i473[6]
  i472.shaderPropertyFlag = i473[7]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i475 = data
  i474.name = i475[0]
  request.r(i475[1], i475[2], 0, i474, 'texture')
  i474.aabb = i475[3]
  i474.vertices = i475[4]
  i474.triangles = i475[5]
  i474.textureRect = UnityEngine.Rect.MinMaxRect(i475[6], i475[7], i475[8], i475[9])
  i474.packedRect = UnityEngine.Rect.MinMaxRect(i475[10], i475[11], i475[12], i475[13])
  i474.border = new pc.Vec4( i475[14], i475[15], i475[16], i475[17] )
  i474.transparency = i475[18]
  i474.bounds = i475[19]
  i474.pixelsPerUnit = i475[20]
  i474.textureWidth = i475[21]
  i474.textureHeight = i475[22]
  i474.nativeSize = new pc.Vec2( i475[23], i475[24] )
  i474.pivot = new pc.Vec2( i475[25], i475[26] )
  i474.textureRectOffset = new pc.Vec2( i475[27], i475[28] )
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.VideoClip"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.VideoClip' )
  var i477 = data
  i476.name = i477[0]
  i476.width = i477[1]
  i476.height = i477[2]
  i476.frameRate = i477[3]
  i476.frameCount = System.UInt64(i477[4])
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i479 = data
  var i481 = i479[0]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i481[i + 0]) );
  }
  i478.files = i480
  i478.componentToPrefabIds = i479[1]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i485 = data
  i484.path = i485[0]
  request.r(i485[1], i485[2], 0, i484, 'unityObject')
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i487 = data
  var i489 = i487[0]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i489[i + 0]) );
  }
  i486.scriptsExecutionOrder = i488
  var i491 = i487[1]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i491[i + 0]) );
  }
  i486.sortingLayers = i490
  var i493 = i487[2]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i493[i + 0]) );
  }
  i486.cullingLayers = i492
  i486.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i487[3], i486.timeSettings)
  i486.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i487[4], i486.physicsSettings)
  i486.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i487[5], i486.physics2DSettings)
  i486.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i487[6], i486.qualitySettings)
  i486.enableRealtimeShadows = !!i487[7]
  i486.enableAutoInstancing = !!i487[8]
  i486.enableDynamicBatching = !!i487[9]
  i486.lightmapEncodingQuality = i487[10]
  i486.desiredColorSpace = i487[11]
  var i495 = i487[12]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( i495[i + 0] );
  }
  i486.allTags = i494
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i499 = data
  i498.name = i499[0]
  i498.value = i499[1]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i503 = data
  i502.id = i503[0]
  i502.name = i503[1]
  i502.value = i503[2]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i507 = data
  i506.id = i507[0]
  i506.name = i507[1]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i509 = data
  i508.fixedDeltaTime = i509[0]
  i508.maximumDeltaTime = i509[1]
  i508.timeScale = i509[2]
  i508.maximumParticleTimestep = i509[3]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i511 = data
  i510.gravity = new pc.Vec3( i511[0], i511[1], i511[2] )
  i510.defaultSolverIterations = i511[3]
  i510.bounceThreshold = i511[4]
  i510.autoSyncTransforms = !!i511[5]
  i510.autoSimulation = !!i511[6]
  var i513 = i511[7]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i513[i + 0]) );
  }
  i510.collisionMatrix = i512
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i517 = data
  i516.enabled = !!i517[0]
  i516.layerId = i517[1]
  i516.otherLayerId = i517[2]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i519 = data
  request.r(i519[0], i519[1], 0, i518, 'material')
  i518.gravity = new pc.Vec2( i519[2], i519[3] )
  i518.positionIterations = i519[4]
  i518.velocityIterations = i519[5]
  i518.velocityThreshold = i519[6]
  i518.maxLinearCorrection = i519[7]
  i518.maxAngularCorrection = i519[8]
  i518.maxTranslationSpeed = i519[9]
  i518.maxRotationSpeed = i519[10]
  i518.baumgarteScale = i519[11]
  i518.baumgarteTOIScale = i519[12]
  i518.timeToSleep = i519[13]
  i518.linearSleepTolerance = i519[14]
  i518.angularSleepTolerance = i519[15]
  i518.defaultContactOffset = i519[16]
  i518.autoSimulation = !!i519[17]
  i518.queriesHitTriggers = !!i519[18]
  i518.queriesStartInColliders = !!i519[19]
  i518.callbacksOnDisable = !!i519[20]
  i518.reuseCollisionCallbacks = !!i519[21]
  i518.autoSyncTransforms = !!i519[22]
  var i521 = i519[23]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i521[i + 0]) );
  }
  i518.collisionMatrix = i520
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i525 = data
  i524.enabled = !!i525[0]
  i524.layerId = i525[1]
  i524.otherLayerId = i525[2]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i527 = data
  var i529 = i527[0]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i529[i + 0]) );
  }
  i526.qualityLevels = i528
  var i531 = i527[1]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( i531[i + 0] );
  }
  i526.names = i530
  i526.shadows = i527[2]
  i526.anisotropicFiltering = i527[3]
  i526.antiAliasing = i527[4]
  i526.lodBias = i527[5]
  i526.shadowCascades = i527[6]
  i526.shadowDistance = i527[7]
  i526.shadowmaskMode = i527[8]
  i526.shadowProjection = i527[9]
  i526.shadowResolution = i527[10]
  i526.softParticles = !!i527[11]
  i526.softVegetation = !!i527[12]
  i526.activeColorSpace = i527[13]
  i526.desiredColorSpace = i527[14]
  i526.masterTextureLimit = i527[15]
  i526.maxQueuedFrames = i527[16]
  i526.particleRaycastBudget = i527[17]
  i526.pixelLightCount = i527[18]
  i526.realtimeReflectionProbes = !!i527[19]
  i526.shadowCascade2Split = i527[20]
  i526.shadowCascade4Split = new pc.Vec3( i527[21], i527[22], i527[23] )
  i526.streamingMipmapsActive = !!i527[24]
  i526.vSyncCount = i527[25]
  i526.asyncUploadBufferSize = i527[26]
  i526.asyncUploadTimeSlice = i527[27]
  i526.billboardsFaceCameraPosition = !!i527[28]
  i526.shadowNearPlaneOffset = i527[29]
  i526.streamingMipmapsMemoryBudget = i527[30]
  i526.maximumLODLevel = i527[31]
  i526.streamingMipmapsAddAllCameras = !!i527[32]
  i526.streamingMipmapsMaxLevelReduction = i527[33]
  i526.streamingMipmapsRenderersPerFrame = i527[34]
  i526.resolutionScalingFixedDPIFactor = i527[35]
  i526.streamingMipmapsMaxFileIORequests = i527[36]
  i526.currentQualityLevel = i527[37]
  return i526
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i535 = data
  request.r(i535[0], i535[1], 0, i534, 'm_ObjectArgument')
  i534.m_ObjectArgumentAssemblyTypeName = i535[2]
  i534.m_IntArgument = i535[3]
  i534.m_FloatArgument = i535[4]
  i534.m_StringArgument = i535[5]
  i534.m_BoolArgument = !!i535[6]
  return i534
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"colorFormat":6,"depthStencilFormat":7,"renderTextureFormat":8,"depth":9,"wrapU":10,"wrapV":11},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.VideoPlayer":{"enabled":0,"source":1,"clip":2,"url":4,"playOnAwake":5,"isLooping":6,"renderMode":7,"targetTexture":8,"targetMaterialRenderer":10,"targetMaterialProperty":12,"playbackSpeed":13},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.VideoClip":{"name":0,"width":1,"height":2,"frameRate":3,"frameCount":4},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"31":[32],"33":[32],"34":[32],"35":[32],"36":[32],"37":[32],"38":[39],"40":[6],"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[42],"49":[20],"50":[20],"51":[20],"52":[20],"53":[20],"54":[20],"55":[20],"56":[20],"57":[20],"58":[20],"59":[20],"60":[20],"61":[20],"62":[6],"63":[64],"65":[66],"67":[66],"10":[0],"68":[69],"70":[71],"72":[69],"73":[0],"74":[0],"12":[10],"3":[1,0],"75":[0],"11":[10],"76":[0],"77":[0],"78":[0],"79":[0],"80":[0],"81":[0],"82":[0],"83":[0],"84":[0],"13":[1,0],"85":[0],"86":[0],"87":[0],"88":[0],"89":[1,0],"90":[0],"91":[24],"92":[24],"25":[24],"93":[24],"94":[6],"95":[6],"96":[97],"98":[6],"99":[0],"100":[64,0],"101":[0,1],"102":[0],"103":[1,0],"104":[64],"105":[1,0],"106":[0],"107":[69]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","ForcePortrait","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.RawImage","UnityEngine.RenderTexture","DragAndDrop.DragAndDropArtillery","RidingHand","TimeController","Spawnlocation","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","ThrobbingHand","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Video.VideoPlayer","UnityEngine.Video.VideoClip","Timer","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.7f1";

Deserializers.productName = "Artilery2.0";

Deserializers.lunaInitializationTime = "04/04/2025 13:22:27";

Deserializers.lunaDaysRunning = "2.9";

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

Deserializers.buildID = "952c3472-5947-45e0-bb98-b3ae5cd9879a";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

