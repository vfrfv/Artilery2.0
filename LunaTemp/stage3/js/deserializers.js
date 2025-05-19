var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i274 = root || request.c( 'UnityEngine.JointSpring' )
  var i275 = data
  i274.spring = i275[0]
  i274.damper = i275[1]
  i274.targetPosition = i275[2]
  return i274
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i276 = root || request.c( 'UnityEngine.JointMotor' )
  var i277 = data
  i276.m_TargetVelocity = i277[0]
  i276.m_Force = i277[1]
  i276.m_FreeSpin = i277[2]
  return i276
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i278 = root || request.c( 'UnityEngine.JointLimits' )
  var i279 = data
  i278.m_Min = i279[0]
  i278.m_Max = i279[1]
  i278.m_Bounciness = i279[2]
  i278.m_BounceMinVelocity = i279[3]
  i278.m_ContactDistance = i279[4]
  i278.minBounce = i279[5]
  i278.maxBounce = i279[6]
  return i278
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i280 = root || request.c( 'UnityEngine.JointDrive' )
  var i281 = data
  i280.m_PositionSpring = i281[0]
  i280.m_PositionDamper = i281[1]
  i280.m_MaximumForce = i281[2]
  i280.m_UseAcceleration = i281[3]
  return i280
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i282 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i283 = data
  i282.m_Spring = i283[0]
  i282.m_Damper = i283[1]
  return i282
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i284 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i285 = data
  i284.m_Limit = i285[0]
  i284.m_Bounciness = i285[1]
  i284.m_ContactDistance = i285[2]
  return i284
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i286 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i287 = data
  i286.m_ExtremumSlip = i287[0]
  i286.m_ExtremumValue = i287[1]
  i286.m_AsymptoteSlip = i287[2]
  i286.m_AsymptoteValue = i287[3]
  i286.m_Stiffness = i287[4]
  return i286
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i288 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i289 = data
  i288.m_LowerAngle = i289[0]
  i288.m_UpperAngle = i289[1]
  return i288
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i290 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i291 = data
  i290.m_MotorSpeed = i291[0]
  i290.m_MaximumMotorTorque = i291[1]
  return i290
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i292 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i293 = data
  i292.m_DampingRatio = i293[0]
  i292.m_Frequency = i293[1]
  i292.m_Angle = i293[2]
  return i292
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i294 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i295 = data
  i294.m_LowerTranslation = i295[0]
  i294.m_UpperTranslation = i295[1]
  return i294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i297 = data
  i296.pivot = new pc.Vec2( i297[0], i297[1] )
  i296.anchorMin = new pc.Vec2( i297[2], i297[3] )
  i296.anchorMax = new pc.Vec2( i297[4], i297[5] )
  i296.sizeDelta = new pc.Vec2( i297[6], i297[7] )
  i296.anchoredPosition3D = new pc.Vec3( i297[8], i297[9], i297[10] )
  i296.rotation = new pc.Quat(i297[11], i297[12], i297[13], i297[14])
  i296.scale = new pc.Vec3( i297[15], i297[16], i297[17] )
  return i296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i299 = data
  i298.cullTransparentMesh = !!i299[0]
  return i298
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i300 = root || request.c( 'UnityEngine.UI.Image' )
  var i301 = data
  request.r(i301[0], i301[1], 0, i300, 'm_Sprite')
  i300.m_Type = i301[2]
  i300.m_PreserveAspect = !!i301[3]
  i300.m_FillCenter = !!i301[4]
  i300.m_FillMethod = i301[5]
  i300.m_FillAmount = i301[6]
  i300.m_FillClockwise = !!i301[7]
  i300.m_FillOrigin = i301[8]
  i300.m_UseSpriteMesh = !!i301[9]
  i300.m_PixelsPerUnitMultiplier = i301[10]
  request.r(i301[11], i301[12], 0, i300, 'm_Material')
  i300.m_Maskable = !!i301[13]
  i300.m_Color = new pc.Color(i301[14], i301[15], i301[16], i301[17])
  i300.m_RaycastTarget = !!i301[18]
  i300.m_RaycastPadding = new pc.Vec4( i301[19], i301[20], i301[21], i301[22] )
  return i300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i303 = data
  i302.name = i303[0]
  i302.tagId = i303[1]
  i302.enabled = !!i303[2]
  i302.isStatic = !!i303[3]
  i302.layer = i303[4]
  return i302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i305 = data
  i304.name = i305[0]
  i304.width = i305[1]
  i304.height = i305[2]
  i304.mipmapCount = i305[3]
  i304.anisoLevel = i305[4]
  i304.filterMode = i305[5]
  i304.hdr = !!i305[6]
  i304.format = i305[7]
  i304.wrapMode = i305[8]
  i304.alphaIsTransparency = !!i305[9]
  i304.alphaSource = i305[10]
  i304.graphicsFormat = i305[11]
  i304.sRGBTexture = !!i305[12]
  i304.desiredColorSpace = i305[13]
  i304.wrapU = i305[14]
  i304.wrapV = i305[15]
  return i304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i307 = data
  i306.name = i307[0]
  i306.width = i307[1]
  i306.height = i307[2]
  i306.anisoLevel = i307[3]
  i306.filterMode = i307[4]
  i306.hdr = !!i307[5]
  i306.colorFormat = i307[6]
  i306.depthStencilFormat = i307[7]
  i306.renderTextureFormat = i307[8]
  i306.depth = i307[9]
  i306.wrapU = i307[10]
  i306.wrapV = i307[11]
  return i306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i309 = data
  i308.name = i309[0]
  i308.index = i309[1]
  i308.startup = !!i309[2]
  return i308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i311 = data
  i310.position = new pc.Vec3( i311[0], i311[1], i311[2] )
  i310.scale = new pc.Vec3( i311[3], i311[4], i311[5] )
  i310.rotation = new pc.Quat(i311[6], i311[7], i311[8], i311[9])
  return i310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i313 = data
  i312.enabled = !!i313[0]
  i312.aspect = i313[1]
  i312.orthographic = !!i313[2]
  i312.orthographicSize = i313[3]
  i312.backgroundColor = new pc.Color(i313[4], i313[5], i313[6], i313[7])
  i312.nearClipPlane = i313[8]
  i312.farClipPlane = i313[9]
  i312.fieldOfView = i313[10]
  i312.depth = i313[11]
  i312.clearFlags = i313[12]
  i312.cullingMask = i313[13]
  i312.rect = i313[14]
  request.r(i313[15], i313[16], 0, i312, 'targetTexture')
  i312.usePhysicalProperties = !!i313[17]
  i312.focalLength = i313[18]
  i312.sensorSize = new pc.Vec2( i313[19], i313[20] )
  i312.lensShift = new pc.Vec2( i313[21], i313[22] )
  i312.gateFit = i313[23]
  i312.commandBufferCount = i313[24]
  i312.cameraType = i313[25]
  return i312
}

Deserializers["ForcePortrait"] = function (request, data, root) {
  var i314 = root || request.c( 'ForcePortrait' )
  var i315 = data
  request.r(i315[0], i315[1], 0, i314, '_canvas1')
  request.r(i315[2], i315[3], 0, i314, '_canvas2')
  return i314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i317 = data
  i316.enabled = !!i317[0]
  i316.planeDistance = i317[1]
  i316.referencePixelsPerUnit = i317[2]
  i316.isFallbackOverlay = !!i317[3]
  i316.renderMode = i317[4]
  i316.renderOrder = i317[5]
  i316.sortingLayerName = i317[6]
  i316.sortingOrder = i317[7]
  i316.scaleFactor = i317[8]
  request.r(i317[9], i317[10], 0, i316, 'worldCamera')
  i316.overrideSorting = !!i317[11]
  i316.pixelPerfect = !!i317[12]
  i316.targetDisplay = i317[13]
  i316.overridePixelPerfect = !!i317[14]
  return i316
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i318 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i319 = data
  i318.m_UiScaleMode = i319[0]
  i318.m_ReferencePixelsPerUnit = i319[1]
  i318.m_ScaleFactor = i319[2]
  i318.m_ReferenceResolution = new pc.Vec2( i319[3], i319[4] )
  i318.m_ScreenMatchMode = i319[5]
  i318.m_MatchWidthOrHeight = i319[6]
  i318.m_PhysicalUnit = i319[7]
  i318.m_FallbackScreenDPI = i319[8]
  i318.m_DefaultSpriteDPI = i319[9]
  i318.m_DynamicPixelsPerUnit = i319[10]
  i318.m_PresetInfoIsWorld = !!i319[11]
  return i318
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i320 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i321 = data
  i320.m_IgnoreReversedGraphics = !!i321[0]
  i320.m_BlockingObjects = i321[1]
  i320.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i321[2] )
  return i320
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i322 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i323 = data
  request.r(i323[0], i323[1], 0, i322, 'm_Texture')
  i322.m_UVRect = UnityEngine.Rect.MinMaxRect(i323[2], i323[3], i323[4], i323[5])
  request.r(i323[6], i323[7], 0, i322, 'm_Material')
  i322.m_Maskable = !!i323[8]
  i322.m_Color = new pc.Color(i323[9], i323[10], i323[11], i323[12])
  i322.m_RaycastTarget = !!i323[13]
  i322.m_RaycastPadding = new pc.Vec4( i323[14], i323[15], i323[16], i323[17] )
  return i322
}

Deserializers["DragAndDrop.DragAndDropArtillery"] = function (request, data, root) {
  var i324 = root || request.c( 'DragAndDrop.DragAndDropArtillery' )
  var i325 = data
  request.r(i325[0], i325[1], 0, i324, '_spritArtillery')
  var i327 = i325[2]
  var i326 = []
  for(var i = 0; i < i327.length; i += 2) {
  request.r(i327[i + 0], i327[i + 1], 2, i326, '')
  }
  i324._ridingHands = i326
  request.r(i325[3], i325[4], 0, i324, '_timeController')
  request.r(i325[5], i325[6], 0, i324, '_spawnLocation')
  request.r(i325[7], i325[8], 0, i324, '_spawnLocation2')
  return i324
}

Deserializers["RidingHand"] = function (request, data, root) {
  var i330 = root || request.c( 'RidingHand' )
  var i331 = data
  i330._speed = i331[0]
  i330._height = i331[1]
  return i330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i333 = data
  i332.usedByComposite = !!i333[0]
  i332.autoTiling = !!i333[1]
  i332.size = new pc.Vec2( i333[2], i333[3] )
  i332.edgeRadius = i333[4]
  i332.enabled = !!i333[5]
  i332.isTrigger = !!i333[6]
  i332.usedByEffector = !!i333[7]
  i332.density = i333[8]
  i332.offset = new pc.Vec2( i333[9], i333[10] )
  request.r(i333[11], i333[12], 0, i332, 'material')
  return i332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i335 = data
  i334.bodyType = i335[0]
  request.r(i335[1], i335[2], 0, i334, 'material')
  i334.simulated = !!i335[3]
  i334.useAutoMass = !!i335[4]
  i334.mass = i335[5]
  i334.drag = i335[6]
  i334.angularDrag = i335[7]
  i334.gravityScale = i335[8]
  i334.collisionDetectionMode = i335[9]
  i334.sleepMode = i335[10]
  i334.constraints = i335[11]
  return i334
}

Deserializers["Spawnlocation"] = function (request, data, root) {
  var i336 = root || request.c( 'Spawnlocation' )
  var i337 = data
  return i336
}

Deserializers["ThrobbingHand"] = function (request, data, root) {
  var i338 = root || request.c( 'ThrobbingHand' )
  var i339 = data
  i338.scaleSpeed = i339[0]
  i338.scaleAmount = i339[1]
  request.r(i339[2], i339[3], 0, i338, '_button')
  request.r(i339[4], i339[5], 0, i338, '_timeController')
  request.r(i339[6], i339[7], 0, i338, '_pumpingButton')
  return i338
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i340 = root || request.c( 'UnityEngine.UI.Button' )
  var i341 = data
  i340.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i341[0], i340.m_OnClick)
  i340.m_Navigation = request.d('UnityEngine.UI.Navigation', i341[1], i340.m_Navigation)
  i340.m_Transition = i341[2]
  i340.m_Colors = request.d('UnityEngine.UI.ColorBlock', i341[3], i340.m_Colors)
  i340.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i341[4], i340.m_SpriteState)
  i340.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i341[5], i340.m_AnimationTriggers)
  i340.m_Interactable = !!i341[6]
  request.r(i341[7], i341[8], 0, i340, 'm_TargetGraphic')
  return i340
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i342 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i343 = data
  i342.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i343[0], i342.m_PersistentCalls)
  return i342
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i344 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i345 = data
  var i347 = i345[0]
  var i346 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i347.length; i += 1) {
    i346.add(request.d('UnityEngine.Events.PersistentCall', i347[i + 0]));
  }
  i344.m_Calls = i346
  return i344
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i350 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i351 = data
  request.r(i351[0], i351[1], 0, i350, 'm_Target')
  i350.m_TargetAssemblyTypeName = i351[2]
  i350.m_MethodName = i351[3]
  i350.m_Mode = i351[4]
  i350.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i351[5], i350.m_Arguments)
  i350.m_CallState = i351[6]
  return i350
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i352 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i353 = data
  i352.m_Mode = i353[0]
  i352.m_WrapAround = !!i353[1]
  request.r(i353[2], i353[3], 0, i352, 'm_SelectOnUp')
  request.r(i353[4], i353[5], 0, i352, 'm_SelectOnDown')
  request.r(i353[6], i353[7], 0, i352, 'm_SelectOnLeft')
  request.r(i353[8], i353[9], 0, i352, 'm_SelectOnRight')
  return i352
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i354 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i355 = data
  i354.m_NormalColor = new pc.Color(i355[0], i355[1], i355[2], i355[3])
  i354.m_HighlightedColor = new pc.Color(i355[4], i355[5], i355[6], i355[7])
  i354.m_PressedColor = new pc.Color(i355[8], i355[9], i355[10], i355[11])
  i354.m_SelectedColor = new pc.Color(i355[12], i355[13], i355[14], i355[15])
  i354.m_DisabledColor = new pc.Color(i355[16], i355[17], i355[18], i355[19])
  i354.m_ColorMultiplier = i355[20]
  i354.m_FadeDuration = i355[21]
  return i354
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i356 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i357 = data
  request.r(i357[0], i357[1], 0, i356, 'm_HighlightedSprite')
  request.r(i357[2], i357[3], 0, i356, 'm_PressedSprite')
  request.r(i357[4], i357[5], 0, i356, 'm_SelectedSprite')
  request.r(i357[6], i357[7], 0, i356, 'm_DisabledSprite')
  return i356
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i358 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i359 = data
  i358.m_NormalTrigger = i359[0]
  i358.m_HighlightedTrigger = i359[1]
  i358.m_PressedTrigger = i359[2]
  i358.m_SelectedTrigger = i359[3]
  i358.m_DisabledTrigger = i359[4]
  return i358
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i360 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i361 = data
  request.r(i361[0], i361[1], 0, i360, 'm_ObjectArgument')
  i360.m_ObjectArgumentAssemblyTypeName = i361[2]
  i360.m_IntArgument = i361[3]
  i360.m_FloatArgument = i361[4]
  i360.m_StringArgument = i361[5]
  i360.m_BoolArgument = !!i361[6]
  return i360
}

Deserializers["ClickCta"] = function (request, data, root) {
  var i362 = root || request.c( 'ClickCta' )
  var i363 = data
  return i362
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i364 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i365 = data
  request.r(i365[0], i365[1], 0, i364, 'm_FirstSelected')
  i364.m_sendNavigationEvents = !!i365[2]
  i364.m_DragThreshold = i365[3]
  return i364
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i366 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i367 = data
  i366.m_HorizontalAxis = i367[0]
  i366.m_VerticalAxis = i367[1]
  i366.m_SubmitButton = i367[2]
  i366.m_CancelButton = i367[3]
  i366.m_InputActionsPerSecond = i367[4]
  i366.m_RepeatDelay = i367[5]
  i366.m_ForceModuleActive = !!i367[6]
  i366.m_SendPointerHoverToParent = !!i367[7]
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.VideoPlayer"] = function (request, data, root) {
  var i368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.VideoPlayer' )
  var i369 = data
  i368.enabled = !!i369[0]
  i368.source = i369[1]
  request.r(i369[2], i369[3], 0, i368, 'clip')
  i368.url = i369[4]
  i368.playOnAwake = !!i369[5]
  i368.isLooping = !!i369[6]
  i368.renderMode = i369[7]
  request.r(i369[8], i369[9], 0, i368, 'targetTexture')
  request.r(i369[10], i369[11], 0, i368, 'targetMaterialRenderer')
  i368.targetMaterialProperty = i369[12]
  i368.playbackSpeed = i369[13]
  return i368
}

Deserializers["TimeController"] = function (request, data, root) {
  var i370 = root || request.c( 'TimeController' )
  var i371 = data
  request.r(i371[0], i371[1], 0, i370, '_timer')
  request.r(i371[2], i371[3], 0, i370, '_videoPlayer')
  request.r(i371[4], i371[5], 0, i370, '_videoPlayer2')
  request.r(i371[6], i371[7], 0, i370, '_forcePortrait')
  request.r(i371[8], i371[9], 0, i370, '_slidingHand1')
  request.r(i371[10], i371[11], 0, i370, '_slidingHand1g')
  request.r(i371[12], i371[13], 0, i370, '_slidingHand2')
  request.r(i371[14], i371[15], 0, i370, '_slidingHand2g')
  request.r(i371[16], i371[17], 0, i370, '_slidingHand3')
  request.r(i371[18], i371[19], 0, i370, '_slidingHand3g')
  request.r(i371[20], i371[21], 0, i370, '_pumping1')
  request.r(i371[22], i371[23], 0, i370, '_pumping1g')
  request.r(i371[24], i371[25], 0, i370, '_pumping2')
  request.r(i371[26], i371[27], 0, i370, '_pumping2g')
  request.r(i371[28], i371[29], 0, i370, '_dragAndDropArtillery1')
  request.r(i371[30], i371[31], 0, i370, '_dragAndDropArtillery1g')
  request.r(i371[32], i371[33], 0, i370, '_dragAndDropArtillery2')
  request.r(i371[34], i371[35], 0, i370, '_dragAndDropArtillery2g')
  request.r(i371[36], i371[37], 0, i370, '_dragAndDropArtillery3')
  request.r(i371[38], i371[39], 0, i370, '_dragAndDropArtillery3g')
  var i373 = i371[40]
  var i372 = []
  for(var i = 0; i < i373.length; i += 2) {
  request.r(i373[i + 0], i373[i + 1], 2, i372, '')
  }
  i370._spawnLocations = i372
  return i370
}

Deserializers["Timer"] = function (request, data, root) {
  var i376 = root || request.c( 'Timer' )
  var i377 = data
  request.r(i377[0], i377[1], 0, i376, '_icons')
  request.r(i377[2], i377[3], 0, i376, '_icons2')
  request.r(i377[4], i377[5], 0, i376, '_button')
  request.r(i377[6], i377[7], 0, i376, '_button2')
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i379 = data
  i378.ambientIntensity = i379[0]
  i378.reflectionIntensity = i379[1]
  i378.ambientMode = i379[2]
  i378.ambientLight = new pc.Color(i379[3], i379[4], i379[5], i379[6])
  i378.ambientSkyColor = new pc.Color(i379[7], i379[8], i379[9], i379[10])
  i378.ambientGroundColor = new pc.Color(i379[11], i379[12], i379[13], i379[14])
  i378.ambientEquatorColor = new pc.Color(i379[15], i379[16], i379[17], i379[18])
  i378.fogColor = new pc.Color(i379[19], i379[20], i379[21], i379[22])
  i378.fogEndDistance = i379[23]
  i378.fogStartDistance = i379[24]
  i378.fogDensity = i379[25]
  i378.fog = !!i379[26]
  request.r(i379[27], i379[28], 0, i378, 'skybox')
  i378.fogMode = i379[29]
  var i381 = i379[30]
  var i380 = []
  for(var i = 0; i < i381.length; i += 1) {
    i380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i381[i + 0]) );
  }
  i378.lightmaps = i380
  i378.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i379[31], i378.lightProbes)
  i378.lightmapsMode = i379[32]
  i378.mixedBakeMode = i379[33]
  i378.environmentLightingMode = i379[34]
  i378.ambientProbe = new pc.SphericalHarmonicsL2(i379[35])
  i378.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i379[36])
  i378.useReferenceAmbientProbe = !!i379[37]
  request.r(i379[38], i379[39], 0, i378, 'customReflection')
  request.r(i379[40], i379[41], 0, i378, 'defaultReflection')
  i378.defaultReflectionMode = i379[42]
  i378.defaultReflectionResolution = i379[43]
  i378.sunLightObjectId = i379[44]
  i378.pixelLightCount = i379[45]
  i378.defaultReflectionHDR = !!i379[46]
  i378.hasLightDataAsset = !!i379[47]
  i378.hasManualGenerate = !!i379[48]
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i385 = data
  request.r(i385[0], i385[1], 0, i384, 'lightmapColor')
  request.r(i385[2], i385[3], 0, i384, 'lightmapDirection')
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i386 = root || new UnityEngine.LightProbes()
  var i387 = data
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i394 = root || new pc.UnityMaterial()
  var i395 = data
  i394.name = i395[0]
  request.r(i395[1], i395[2], 0, i394, 'shader')
  i394.renderQueue = i395[3]
  i394.enableInstancing = !!i395[4]
  var i397 = i395[5]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i397[i + 0]) );
  }
  i394.floatParameters = i396
  var i399 = i395[6]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i399[i + 0]) );
  }
  i394.colorParameters = i398
  var i401 = i395[7]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i401[i + 0]) );
  }
  i394.vectorParameters = i400
  var i403 = i395[8]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i403[i + 0]) );
  }
  i394.textureParameters = i402
  var i405 = i395[9]
  var i404 = []
  for(var i = 0; i < i405.length; i += 1) {
    i404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i405[i + 0]) );
  }
  i394.materialFlags = i404
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i409 = data
  i408.name = i409[0]
  i408.value = i409[1]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i413 = data
  i412.name = i413[0]
  i412.value = new pc.Color(i413[1], i413[2], i413[3], i413[4])
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i417 = data
  i416.name = i417[0]
  i416.value = new pc.Vec4( i417[1], i417[2], i417[3], i417[4] )
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i421 = data
  i420.name = i421[0]
  request.r(i421[1], i421[2], 0, i420, 'value')
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i425 = data
  i424.name = i425[0]
  i424.enabled = !!i425[1]
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i427 = data
  var i429 = i427[0]
  var i428 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i429.length; i += 1) {
    i428.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i429[i + 0]));
  }
  i426.ShaderCompilationErrors = i428
  i426.name = i427[1]
  i426.guid = i427[2]
  var i431 = i427[3]
  var i430 = []
  for(var i = 0; i < i431.length; i += 1) {
    i430.push( i431[i + 0] );
  }
  i426.shaderDefinedKeywords = i430
  var i433 = i427[4]
  var i432 = []
  for(var i = 0; i < i433.length; i += 1) {
    i432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i433[i + 0]) );
  }
  i426.passes = i432
  var i435 = i427[5]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i435[i + 0]) );
  }
  i426.usePasses = i434
  var i437 = i427[6]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i437[i + 0]) );
  }
  i426.defaultParameterValues = i436
  request.r(i427[7], i427[8], 0, i426, 'unityFallbackShader')
  i426.readDepth = !!i427[9]
  i426.isCreatedByShaderGraph = !!i427[10]
  i426.compiled = !!i427[11]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i441 = data
  i440.shaderName = i441[0]
  i440.errorMessage = i441[1]
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i446 = root || new pc.UnityShaderPass()
  var i447 = data
  i446.id = i447[0]
  i446.subShaderIndex = i447[1]
  i446.name = i447[2]
  i446.passType = i447[3]
  i446.grabPassTextureName = i447[4]
  i446.usePass = !!i447[5]
  i446.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i447[6], i446.zTest)
  i446.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i447[7], i446.zWrite)
  i446.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i447[8], i446.culling)
  i446.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i447[9], i446.blending)
  i446.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i447[10], i446.alphaBlending)
  i446.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i447[11], i446.colorWriteMask)
  i446.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i447[12], i446.offsetUnits)
  i446.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i447[13], i446.offsetFactor)
  i446.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i447[14], i446.stencilRef)
  i446.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i447[15], i446.stencilReadMask)
  i446.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i447[16], i446.stencilWriteMask)
  i446.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i447[17], i446.stencilOp)
  i446.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i447[18], i446.stencilOpFront)
  i446.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i447[19], i446.stencilOpBack)
  var i449 = i447[20]
  var i448 = []
  for(var i = 0; i < i449.length; i += 1) {
    i448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i449[i + 0]) );
  }
  i446.tags = i448
  var i451 = i447[21]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( i451[i + 0] );
  }
  i446.passDefinedKeywords = i450
  var i453 = i447[22]
  var i452 = []
  for(var i = 0; i < i453.length; i += 1) {
    i452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i453[i + 0]) );
  }
  i446.passDefinedKeywordGroups = i452
  var i455 = i447[23]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i455[i + 0]) );
  }
  i446.variants = i454
  var i457 = i447[24]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i457[i + 0]) );
  }
  i446.excludedVariants = i456
  i446.hasDepthReader = !!i447[25]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i459 = data
  i458.val = i459[0]
  i458.name = i459[1]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i461 = data
  i460.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i461[0], i460.src)
  i460.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i461[1], i460.dst)
  i460.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i461[2], i460.op)
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i463 = data
  i462.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i463[0], i462.pass)
  i462.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i463[1], i462.fail)
  i462.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i463[2], i462.zFail)
  i462.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i463[3], i462.comp)
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i467 = data
  i466.name = i467[0]
  i466.value = i467[1]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i471 = data
  var i473 = i471[0]
  var i472 = []
  for(var i = 0; i < i473.length; i += 1) {
    i472.push( i473[i + 0] );
  }
  i470.keywords = i472
  i470.hasDiscard = !!i471[1]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i477 = data
  i476.passId = i477[0]
  i476.subShaderIndex = i477[1]
  var i479 = i477[2]
  var i478 = []
  for(var i = 0; i < i479.length; i += 1) {
    i478.push( i479[i + 0] );
  }
  i476.keywords = i478
  i476.vertexProgram = i477[3]
  i476.fragmentProgram = i477[4]
  i476.exportedForWebGl2 = !!i477[5]
  i476.readDepth = !!i477[6]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i483 = data
  request.r(i483[0], i483[1], 0, i482, 'shader')
  i482.pass = i483[2]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i487 = data
  i486.name = i487[0]
  i486.type = i487[1]
  i486.value = new pc.Vec4( i487[2], i487[3], i487[4], i487[5] )
  i486.textureValue = i487[6]
  i486.shaderPropertyFlag = i487[7]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i489 = data
  i488.name = i489[0]
  request.r(i489[1], i489[2], 0, i488, 'texture')
  i488.aabb = i489[3]
  i488.vertices = i489[4]
  i488.triangles = i489[5]
  i488.textureRect = UnityEngine.Rect.MinMaxRect(i489[6], i489[7], i489[8], i489[9])
  i488.packedRect = UnityEngine.Rect.MinMaxRect(i489[10], i489[11], i489[12], i489[13])
  i488.border = new pc.Vec4( i489[14], i489[15], i489[16], i489[17] )
  i488.transparency = i489[18]
  i488.bounds = i489[19]
  i488.pixelsPerUnit = i489[20]
  i488.textureWidth = i489[21]
  i488.textureHeight = i489[22]
  i488.nativeSize = new pc.Vec2( i489[23], i489[24] )
  i488.pivot = new pc.Vec2( i489[25], i489[26] )
  i488.textureRectOffset = new pc.Vec2( i489[27], i489[28] )
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.VideoClip"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.VideoClip' )
  var i491 = data
  i490.name = i491[0]
  i490.width = i491[1]
  i490.height = i491[2]
  i490.frameRate = i491[3]
  i490.frameCount = System.UInt64(i491[4])
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i493 = data
  var i495 = i493[0]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i495[i + 0]) );
  }
  i492.files = i494
  i492.componentToPrefabIds = i493[1]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i499 = data
  i498.path = i499[0]
  request.r(i499[1], i499[2], 0, i498, 'unityObject')
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i501 = data
  var i503 = i501[0]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i503[i + 0]) );
  }
  i500.scriptsExecutionOrder = i502
  var i505 = i501[1]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i505[i + 0]) );
  }
  i500.sortingLayers = i504
  var i507 = i501[2]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i507[i + 0]) );
  }
  i500.cullingLayers = i506
  i500.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i501[3], i500.timeSettings)
  i500.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i501[4], i500.physicsSettings)
  i500.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i501[5], i500.physics2DSettings)
  i500.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i501[6], i500.qualitySettings)
  i500.enableRealtimeShadows = !!i501[7]
  i500.enableAutoInstancing = !!i501[8]
  i500.enableDynamicBatching = !!i501[9]
  i500.lightmapEncodingQuality = i501[10]
  i500.desiredColorSpace = i501[11]
  var i509 = i501[12]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( i509[i + 0] );
  }
  i500.allTags = i508
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i513 = data
  i512.name = i513[0]
  i512.value = i513[1]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i517 = data
  i516.id = i517[0]
  i516.name = i517[1]
  i516.value = i517[2]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i521 = data
  i520.id = i521[0]
  i520.name = i521[1]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i523 = data
  i522.fixedDeltaTime = i523[0]
  i522.maximumDeltaTime = i523[1]
  i522.timeScale = i523[2]
  i522.maximumParticleTimestep = i523[3]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i525 = data
  i524.gravity = new pc.Vec3( i525[0], i525[1], i525[2] )
  i524.defaultSolverIterations = i525[3]
  i524.bounceThreshold = i525[4]
  i524.autoSyncTransforms = !!i525[5]
  i524.autoSimulation = !!i525[6]
  var i527 = i525[7]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i527[i + 0]) );
  }
  i524.collisionMatrix = i526
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i531 = data
  i530.enabled = !!i531[0]
  i530.layerId = i531[1]
  i530.otherLayerId = i531[2]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'material')
  i532.gravity = new pc.Vec2( i533[2], i533[3] )
  i532.positionIterations = i533[4]
  i532.velocityIterations = i533[5]
  i532.velocityThreshold = i533[6]
  i532.maxLinearCorrection = i533[7]
  i532.maxAngularCorrection = i533[8]
  i532.maxTranslationSpeed = i533[9]
  i532.maxRotationSpeed = i533[10]
  i532.baumgarteScale = i533[11]
  i532.baumgarteTOIScale = i533[12]
  i532.timeToSleep = i533[13]
  i532.linearSleepTolerance = i533[14]
  i532.angularSleepTolerance = i533[15]
  i532.defaultContactOffset = i533[16]
  i532.autoSimulation = !!i533[17]
  i532.queriesHitTriggers = !!i533[18]
  i532.queriesStartInColliders = !!i533[19]
  i532.callbacksOnDisable = !!i533[20]
  i532.reuseCollisionCallbacks = !!i533[21]
  i532.autoSyncTransforms = !!i533[22]
  var i535 = i533[23]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i535[i + 0]) );
  }
  i532.collisionMatrix = i534
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i539 = data
  i538.enabled = !!i539[0]
  i538.layerId = i539[1]
  i538.otherLayerId = i539[2]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i541 = data
  var i543 = i541[0]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i543[i + 0]) );
  }
  i540.qualityLevels = i542
  var i545 = i541[1]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( i545[i + 0] );
  }
  i540.names = i544
  i540.shadows = i541[2]
  i540.anisotropicFiltering = i541[3]
  i540.antiAliasing = i541[4]
  i540.lodBias = i541[5]
  i540.shadowCascades = i541[6]
  i540.shadowDistance = i541[7]
  i540.shadowmaskMode = i541[8]
  i540.shadowProjection = i541[9]
  i540.shadowResolution = i541[10]
  i540.softParticles = !!i541[11]
  i540.softVegetation = !!i541[12]
  i540.activeColorSpace = i541[13]
  i540.desiredColorSpace = i541[14]
  i540.masterTextureLimit = i541[15]
  i540.maxQueuedFrames = i541[16]
  i540.particleRaycastBudget = i541[17]
  i540.pixelLightCount = i541[18]
  i540.realtimeReflectionProbes = !!i541[19]
  i540.shadowCascade2Split = i541[20]
  i540.shadowCascade4Split = new pc.Vec3( i541[21], i541[22], i541[23] )
  i540.streamingMipmapsActive = !!i541[24]
  i540.vSyncCount = i541[25]
  i540.asyncUploadBufferSize = i541[26]
  i540.asyncUploadTimeSlice = i541[27]
  i540.billboardsFaceCameraPosition = !!i541[28]
  i540.shadowNearPlaneOffset = i541[29]
  i540.streamingMipmapsMemoryBudget = i541[30]
  i540.maximumLODLevel = i541[31]
  i540.streamingMipmapsAddAllCameras = !!i541[32]
  i540.streamingMipmapsMaxLevelReduction = i541[33]
  i540.streamingMipmapsRenderersPerFrame = i541[34]
  i540.resolutionScalingFixedDPIFactor = i541[35]
  i540.streamingMipmapsMaxFileIORequests = i541[36]
  i540.currentQualityLevel = i541[37]
  return i540
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"colorFormat":6,"depthStencilFormat":7,"renderTextureFormat":8,"depth":9,"wrapU":10,"wrapV":11},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.VideoPlayer":{"enabled":0,"source":1,"clip":2,"url":4,"playOnAwake":5,"isLooping":6,"renderMode":7,"targetTexture":8,"targetMaterialRenderer":10,"targetMaterialProperty":12,"playbackSpeed":13},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.VideoClip":{"name":0,"width":1,"height":2,"frameRate":3,"frameCount":4},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"32":[33],"34":[33],"35":[33],"36":[33],"37":[33],"38":[33],"39":[40],"41":[6],"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[43],"50":[21],"51":[21],"52":[21],"53":[21],"54":[21],"55":[21],"56":[21],"57":[21],"58":[21],"59":[21],"60":[21],"61":[21],"62":[21],"63":[6],"64":[65],"66":[67],"68":[67],"11":[0],"69":[70],"71":[72],"73":[70],"74":[0],"75":[0],"13":[11],"3":[1,0],"76":[0],"12":[11],"77":[0],"78":[0],"79":[0],"80":[0],"81":[0],"82":[0],"83":[0],"84":[0],"85":[0],"14":[1,0],"86":[0],"87":[0],"88":[0],"89":[0],"90":[1,0],"91":[0],"92":[25],"93":[25],"26":[25],"94":[25],"95":[6],"96":[6],"97":[98],"99":[6],"100":[0],"101":[65,0],"102":[0,1],"103":[0],"104":[1,0],"105":[65],"106":[1,0],"107":[0],"108":[70]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","ForcePortrait","UnityEngine.GameObject","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.RawImage","UnityEngine.RenderTexture","DragAndDrop.DragAndDropArtillery","RidingHand","TimeController","Spawnlocation","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","ThrobbingHand","UnityEngine.UI.Button","ClickCta","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Video.VideoPlayer","UnityEngine.Video.VideoClip","Timer","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.49f1";

Deserializers.productName = "Artilery2.0";

Deserializers.lunaInitializationTime = "04/04/2025 13:22:27";

Deserializers.lunaDaysRunning = "30.8";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "Artillery-video";

Deserializers.lunaAppID = "27856";

Deserializers.projectId = "84cf4890719069d48b7b9de159fe8bbd";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

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

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.Artilery2.0";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "f26475af-1d73-4851-b0ed-cacd9a6dd67f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

