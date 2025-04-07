var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i280 = root || request.c( 'UnityEngine.JointSpring' )
  var i281 = data
  i280.spring = i281[0]
  i280.damper = i281[1]
  i280.targetPosition = i281[2]
  return i280
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i282 = root || request.c( 'UnityEngine.JointMotor' )
  var i283 = data
  i282.m_TargetVelocity = i283[0]
  i282.m_Force = i283[1]
  i282.m_FreeSpin = i283[2]
  return i282
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i284 = root || request.c( 'UnityEngine.JointLimits' )
  var i285 = data
  i284.m_Min = i285[0]
  i284.m_Max = i285[1]
  i284.m_Bounciness = i285[2]
  i284.m_BounceMinVelocity = i285[3]
  i284.m_ContactDistance = i285[4]
  i284.minBounce = i285[5]
  i284.maxBounce = i285[6]
  return i284
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i286 = root || request.c( 'UnityEngine.JointDrive' )
  var i287 = data
  i286.m_PositionSpring = i287[0]
  i286.m_PositionDamper = i287[1]
  i286.m_MaximumForce = i287[2]
  i286.m_UseAcceleration = i287[3]
  return i286
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i288 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i289 = data
  i288.m_Spring = i289[0]
  i288.m_Damper = i289[1]
  return i288
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i290 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i291 = data
  i290.m_Limit = i291[0]
  i290.m_Bounciness = i291[1]
  i290.m_ContactDistance = i291[2]
  return i290
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i292 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i293 = data
  i292.m_ExtremumSlip = i293[0]
  i292.m_ExtremumValue = i293[1]
  i292.m_AsymptoteSlip = i293[2]
  i292.m_AsymptoteValue = i293[3]
  i292.m_Stiffness = i293[4]
  return i292
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i294 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i295 = data
  i294.m_LowerAngle = i295[0]
  i294.m_UpperAngle = i295[1]
  return i294
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i296 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i297 = data
  i296.m_MotorSpeed = i297[0]
  i296.m_MaximumMotorTorque = i297[1]
  return i296
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i298 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i299 = data
  i298.m_DampingRatio = i299[0]
  i298.m_Frequency = i299[1]
  i298.m_Angle = i299[2]
  return i298
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i300 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i301 = data
  i300.m_LowerTranslation = i301[0]
  i300.m_UpperTranslation = i301[1]
  return i300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i303 = data
  i302.name = i303[0]
  i302.width = i303[1]
  i302.height = i303[2]
  i302.mipmapCount = i303[3]
  i302.anisoLevel = i303[4]
  i302.filterMode = i303[5]
  i302.hdr = !!i303[6]
  i302.format = i303[7]
  i302.wrapMode = i303[8]
  i302.alphaIsTransparency = !!i303[9]
  i302.alphaSource = i303[10]
  i302.graphicsFormat = i303[11]
  i302.sRGBTexture = !!i303[12]
  i302.desiredColorSpace = i303[13]
  i302.wrapU = i303[14]
  i302.wrapV = i303[15]
  return i302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i305 = data
  i304.pivot = new pc.Vec2( i305[0], i305[1] )
  i304.anchorMin = new pc.Vec2( i305[2], i305[3] )
  i304.anchorMax = new pc.Vec2( i305[4], i305[5] )
  i304.sizeDelta = new pc.Vec2( i305[6], i305[7] )
  i304.anchoredPosition3D = new pc.Vec3( i305[8], i305[9], i305[10] )
  i304.rotation = new pc.Quat(i305[11], i305[12], i305[13], i305[14])
  i304.scale = new pc.Vec3( i305[15], i305[16], i305[17] )
  return i304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i307 = data
  i306.cullTransparentMesh = !!i307[0]
  return i306
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i308 = root || request.c( 'UnityEngine.UI.Image' )
  var i309 = data
  request.r(i309[0], i309[1], 0, i308, 'm_Sprite')
  i308.m_Type = i309[2]
  i308.m_PreserveAspect = !!i309[3]
  i308.m_FillCenter = !!i309[4]
  i308.m_FillMethod = i309[5]
  i308.m_FillAmount = i309[6]
  i308.m_FillClockwise = !!i309[7]
  i308.m_FillOrigin = i309[8]
  i308.m_UseSpriteMesh = !!i309[9]
  i308.m_PixelsPerUnitMultiplier = i309[10]
  request.r(i309[11], i309[12], 0, i308, 'm_Material')
  i308.m_Maskable = !!i309[13]
  i308.m_Color = new pc.Color(i309[14], i309[15], i309[16], i309[17])
  i308.m_RaycastTarget = !!i309[18]
  i308.m_RaycastPadding = new pc.Vec4( i309[19], i309[20], i309[21], i309[22] )
  return i308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i311 = data
  i310.name = i311[0]
  i310.tagId = i311[1]
  i310.enabled = !!i311[2]
  i310.isStatic = !!i311[3]
  i310.layer = i311[4]
  return i310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i313 = data
  i312.name = i313[0]
  i312.width = i313[1]
  i312.height = i313[2]
  i312.anisoLevel = i313[3]
  i312.filterMode = i313[4]
  i312.hdr = !!i313[5]
  i312.colorFormat = i313[6]
  i312.depthStencilFormat = i313[7]
  i312.renderTextureFormat = i313[8]
  i312.depth = i313[9]
  i312.wrapU = i313[10]
  i312.wrapV = i313[11]
  return i312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i315 = data
  i314.name = i315[0]
  i314.index = i315[1]
  i314.startup = !!i315[2]
  return i314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i317 = data
  i316.position = new pc.Vec3( i317[0], i317[1], i317[2] )
  i316.scale = new pc.Vec3( i317[3], i317[4], i317[5] )
  i316.rotation = new pc.Quat(i317[6], i317[7], i317[8], i317[9])
  return i316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i319 = data
  i318.enabled = !!i319[0]
  i318.aspect = i319[1]
  i318.orthographic = !!i319[2]
  i318.orthographicSize = i319[3]
  i318.backgroundColor = new pc.Color(i319[4], i319[5], i319[6], i319[7])
  i318.nearClipPlane = i319[8]
  i318.farClipPlane = i319[9]
  i318.fieldOfView = i319[10]
  i318.depth = i319[11]
  i318.clearFlags = i319[12]
  i318.cullingMask = i319[13]
  i318.rect = i319[14]
  request.r(i319[15], i319[16], 0, i318, 'targetTexture')
  i318.usePhysicalProperties = !!i319[17]
  i318.focalLength = i319[18]
  i318.sensorSize = new pc.Vec2( i319[19], i319[20] )
  i318.lensShift = new pc.Vec2( i319[21], i319[22] )
  i318.gateFit = i319[23]
  i318.commandBufferCount = i319[24]
  i318.cameraType = i319[25]
  return i318
}

Deserializers["ForcePortrait"] = function (request, data, root) {
  var i320 = root || request.c( 'ForcePortrait' )
  var i321 = data
  request.r(i321[0], i321[1], 0, i320, 'canvasRoot')
  return i320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i323 = data
  i322.enabled = !!i323[0]
  i322.planeDistance = i323[1]
  i322.referencePixelsPerUnit = i323[2]
  i322.isFallbackOverlay = !!i323[3]
  i322.renderMode = i323[4]
  i322.renderOrder = i323[5]
  i322.sortingLayerName = i323[6]
  i322.sortingOrder = i323[7]
  i322.scaleFactor = i323[8]
  request.r(i323[9], i323[10], 0, i322, 'worldCamera')
  i322.overrideSorting = !!i323[11]
  i322.pixelPerfect = !!i323[12]
  i322.targetDisplay = i323[13]
  i322.overridePixelPerfect = !!i323[14]
  return i322
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i324 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i325 = data
  i324.m_UiScaleMode = i325[0]
  i324.m_ReferencePixelsPerUnit = i325[1]
  i324.m_ScaleFactor = i325[2]
  i324.m_ReferenceResolution = new pc.Vec2( i325[3], i325[4] )
  i324.m_ScreenMatchMode = i325[5]
  i324.m_MatchWidthOrHeight = i325[6]
  i324.m_PhysicalUnit = i325[7]
  i324.m_FallbackScreenDPI = i325[8]
  i324.m_DefaultSpriteDPI = i325[9]
  i324.m_DynamicPixelsPerUnit = i325[10]
  i324.m_PresetInfoIsWorld = !!i325[11]
  return i324
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i326 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i327 = data
  i326.m_IgnoreReversedGraphics = !!i327[0]
  i326.m_BlockingObjects = i327[1]
  i326.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i327[2] )
  return i326
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i328 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i329 = data
  request.r(i329[0], i329[1], 0, i328, 'm_Texture')
  i328.m_UVRect = UnityEngine.Rect.MinMaxRect(i329[2], i329[3], i329[4], i329[5])
  request.r(i329[6], i329[7], 0, i328, 'm_Material')
  i328.m_Maskable = !!i329[8]
  i328.m_Color = new pc.Color(i329[9], i329[10], i329[11], i329[12])
  i328.m_RaycastTarget = !!i329[13]
  i328.m_RaycastPadding = new pc.Vec4( i329[14], i329[15], i329[16], i329[17] )
  return i328
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i330 = root || request.c( 'UnityEngine.UI.Text' )
  var i331 = data
  i330.m_FontData = request.d('UnityEngine.UI.FontData', i331[0], i330.m_FontData)
  i330.m_Text = i331[1]
  request.r(i331[2], i331[3], 0, i330, 'm_Material')
  i330.m_Maskable = !!i331[4]
  i330.m_Color = new pc.Color(i331[5], i331[6], i331[7], i331[8])
  i330.m_RaycastTarget = !!i331[9]
  i330.m_RaycastPadding = new pc.Vec4( i331[10], i331[11], i331[12], i331[13] )
  return i330
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i332 = root || request.c( 'UnityEngine.UI.FontData' )
  var i333 = data
  request.r(i333[0], i333[1], 0, i332, 'm_Font')
  i332.m_FontSize = i333[2]
  i332.m_FontStyle = i333[3]
  i332.m_BestFit = !!i333[4]
  i332.m_MinSize = i333[5]
  i332.m_MaxSize = i333[6]
  i332.m_Alignment = i333[7]
  i332.m_AlignByGeometry = !!i333[8]
  i332.m_RichText = !!i333[9]
  i332.m_HorizontalOverflow = i333[10]
  i332.m_VerticalOverflow = i333[11]
  i332.m_LineSpacing = i333[12]
  return i332
}

Deserializers["DragAndDrop.DragAndDropArtillery"] = function (request, data, root) {
  var i334 = root || request.c( 'DragAndDrop.DragAndDropArtillery' )
  var i335 = data
  request.r(i335[0], i335[1], 0, i334, '_spritArtillery')
  var i337 = i335[2]
  var i336 = []
  for(var i = 0; i < i337.length; i += 2) {
  request.r(i337[i + 0], i337[i + 1], 2, i336, '')
  }
  i334._ridingHands = i336
  request.r(i335[3], i335[4], 0, i334, '_timeController')
  request.r(i335[5], i335[6], 0, i334, '_spawnLocation')
  request.r(i335[7], i335[8], 0, i334, '_spawnLocation2')
  return i334
}

Deserializers["RidingHand"] = function (request, data, root) {
  var i340 = root || request.c( 'RidingHand' )
  var i341 = data
  i340._speed = i341[0]
  i340._height = i341[1]
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i343 = data
  i342.usedByComposite = !!i343[0]
  i342.autoTiling = !!i343[1]
  i342.size = new pc.Vec2( i343[2], i343[3] )
  i342.edgeRadius = i343[4]
  i342.enabled = !!i343[5]
  i342.isTrigger = !!i343[6]
  i342.usedByEffector = !!i343[7]
  i342.density = i343[8]
  i342.offset = new pc.Vec2( i343[9], i343[10] )
  request.r(i343[11], i343[12], 0, i342, 'material')
  return i342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i345 = data
  i344.bodyType = i345[0]
  request.r(i345[1], i345[2], 0, i344, 'material')
  i344.simulated = !!i345[3]
  i344.useAutoMass = !!i345[4]
  i344.mass = i345[5]
  i344.drag = i345[6]
  i344.angularDrag = i345[7]
  i344.gravityScale = i345[8]
  i344.collisionDetectionMode = i345[9]
  i344.sleepMode = i345[10]
  i344.constraints = i345[11]
  return i344
}

Deserializers["Spawnlocation"] = function (request, data, root) {
  var i346 = root || request.c( 'Spawnlocation' )
  var i347 = data
  return i346
}

Deserializers["ThrobbingHand"] = function (request, data, root) {
  var i348 = root || request.c( 'ThrobbingHand' )
  var i349 = data
  i348.scaleSpeed = i349[0]
  i348.scaleAmount = i349[1]
  request.r(i349[2], i349[3], 0, i348, '_button')
  request.r(i349[4], i349[5], 0, i348, '_timeController')
  request.r(i349[6], i349[7], 0, i348, '_pumpingButton')
  return i348
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i350 = root || request.c( 'UnityEngine.UI.Button' )
  var i351 = data
  i350.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i351[0], i350.m_OnClick)
  i350.m_Navigation = request.d('UnityEngine.UI.Navigation', i351[1], i350.m_Navigation)
  i350.m_Transition = i351[2]
  i350.m_Colors = request.d('UnityEngine.UI.ColorBlock', i351[3], i350.m_Colors)
  i350.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i351[4], i350.m_SpriteState)
  i350.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i351[5], i350.m_AnimationTriggers)
  i350.m_Interactable = !!i351[6]
  request.r(i351[7], i351[8], 0, i350, 'm_TargetGraphic')
  return i350
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i352 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i353 = data
  i352.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i353[0], i352.m_PersistentCalls)
  return i352
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i354 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i355 = data
  var i357 = i355[0]
  var i356 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i357.length; i += 1) {
    i356.add(request.d('UnityEngine.Events.PersistentCall', i357[i + 0]));
  }
  i354.m_Calls = i356
  return i354
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i360 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i361 = data
  request.r(i361[0], i361[1], 0, i360, 'm_Target')
  i360.m_TargetAssemblyTypeName = i361[2]
  i360.m_MethodName = i361[3]
  i360.m_Mode = i361[4]
  i360.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i361[5], i360.m_Arguments)
  i360.m_CallState = i361[6]
  return i360
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i362 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i363 = data
  i362.m_Mode = i363[0]
  i362.m_WrapAround = !!i363[1]
  request.r(i363[2], i363[3], 0, i362, 'm_SelectOnUp')
  request.r(i363[4], i363[5], 0, i362, 'm_SelectOnDown')
  request.r(i363[6], i363[7], 0, i362, 'm_SelectOnLeft')
  request.r(i363[8], i363[9], 0, i362, 'm_SelectOnRight')
  return i362
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i364 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i365 = data
  i364.m_NormalColor = new pc.Color(i365[0], i365[1], i365[2], i365[3])
  i364.m_HighlightedColor = new pc.Color(i365[4], i365[5], i365[6], i365[7])
  i364.m_PressedColor = new pc.Color(i365[8], i365[9], i365[10], i365[11])
  i364.m_SelectedColor = new pc.Color(i365[12], i365[13], i365[14], i365[15])
  i364.m_DisabledColor = new pc.Color(i365[16], i365[17], i365[18], i365[19])
  i364.m_ColorMultiplier = i365[20]
  i364.m_FadeDuration = i365[21]
  return i364
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i366 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i367 = data
  request.r(i367[0], i367[1], 0, i366, 'm_HighlightedSprite')
  request.r(i367[2], i367[3], 0, i366, 'm_PressedSprite')
  request.r(i367[4], i367[5], 0, i366, 'm_SelectedSprite')
  request.r(i367[6], i367[7], 0, i366, 'm_DisabledSprite')
  return i366
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i368 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i369 = data
  i368.m_NormalTrigger = i369[0]
  i368.m_HighlightedTrigger = i369[1]
  i368.m_PressedTrigger = i369[2]
  i368.m_SelectedTrigger = i369[3]
  i368.m_DisabledTrigger = i369[4]
  return i368
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i370 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i371 = data
  request.r(i371[0], i371[1], 0, i370, 'm_FirstSelected')
  i370.m_sendNavigationEvents = !!i371[2]
  i370.m_DragThreshold = i371[3]
  return i370
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i372 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i373 = data
  i372.m_HorizontalAxis = i373[0]
  i372.m_VerticalAxis = i373[1]
  i372.m_SubmitButton = i373[2]
  i372.m_CancelButton = i373[3]
  i372.m_InputActionsPerSecond = i373[4]
  i372.m_RepeatDelay = i373[5]
  i372.m_ForceModuleActive = !!i373[6]
  i372.m_SendPointerHoverToParent = !!i373[7]
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.VideoPlayer"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.VideoPlayer' )
  var i375 = data
  i374.enabled = !!i375[0]
  i374.source = i375[1]
  request.r(i375[2], i375[3], 0, i374, 'clip')
  i374.url = i375[4]
  i374.playOnAwake = !!i375[5]
  i374.isLooping = !!i375[6]
  i374.renderMode = i375[7]
  request.r(i375[8], i375[9], 0, i374, 'targetTexture')
  request.r(i375[10], i375[11], 0, i374, 'targetMaterialRenderer')
  i374.targetMaterialProperty = i375[12]
  i374.playbackSpeed = i375[13]
  return i374
}

Deserializers["TimeController"] = function (request, data, root) {
  var i376 = root || request.c( 'TimeController' )
  var i377 = data
  request.r(i377[0], i377[1], 0, i376, '_timer')
  request.r(i377[2], i377[3], 0, i376, '_videoPlayer')
  request.r(i377[4], i377[5], 0, i376, '_slidingHand1')
  request.r(i377[6], i377[7], 0, i376, '_slidingHand2')
  request.r(i377[8], i377[9], 0, i376, '_slidingHand3')
  request.r(i377[10], i377[11], 0, i376, '_pumping1')
  request.r(i377[12], i377[13], 0, i376, '_pumping2')
  request.r(i377[14], i377[15], 0, i376, '_dragAndDropArtillery1')
  request.r(i377[16], i377[17], 0, i376, '_dragAndDropArtillery2')
  request.r(i377[18], i377[19], 0, i376, '_dragAndDropArtillery3')
  return i376
}

Deserializers["Timer"] = function (request, data, root) {
  var i378 = root || request.c( 'Timer' )
  var i379 = data
  request.r(i379[0], i379[1], 0, i378, '_icons')
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i381 = data
  i380.ambientIntensity = i381[0]
  i380.reflectionIntensity = i381[1]
  i380.ambientMode = i381[2]
  i380.ambientLight = new pc.Color(i381[3], i381[4], i381[5], i381[6])
  i380.ambientSkyColor = new pc.Color(i381[7], i381[8], i381[9], i381[10])
  i380.ambientGroundColor = new pc.Color(i381[11], i381[12], i381[13], i381[14])
  i380.ambientEquatorColor = new pc.Color(i381[15], i381[16], i381[17], i381[18])
  i380.fogColor = new pc.Color(i381[19], i381[20], i381[21], i381[22])
  i380.fogEndDistance = i381[23]
  i380.fogStartDistance = i381[24]
  i380.fogDensity = i381[25]
  i380.fog = !!i381[26]
  request.r(i381[27], i381[28], 0, i380, 'skybox')
  i380.fogMode = i381[29]
  var i383 = i381[30]
  var i382 = []
  for(var i = 0; i < i383.length; i += 1) {
    i382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i383[i + 0]) );
  }
  i380.lightmaps = i382
  i380.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i381[31], i380.lightProbes)
  i380.lightmapsMode = i381[32]
  i380.mixedBakeMode = i381[33]
  i380.environmentLightingMode = i381[34]
  i380.ambientProbe = new pc.SphericalHarmonicsL2(i381[35])
  i380.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i381[36])
  i380.useReferenceAmbientProbe = !!i381[37]
  request.r(i381[38], i381[39], 0, i380, 'customReflection')
  request.r(i381[40], i381[41], 0, i380, 'defaultReflection')
  i380.defaultReflectionMode = i381[42]
  i380.defaultReflectionResolution = i381[43]
  i380.sunLightObjectId = i381[44]
  i380.pixelLightCount = i381[45]
  i380.defaultReflectionHDR = !!i381[46]
  i380.hasLightDataAsset = !!i381[47]
  i380.hasManualGenerate = !!i381[48]
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i387 = data
  request.r(i387[0], i387[1], 0, i386, 'lightmapColor')
  request.r(i387[2], i387[3], 0, i386, 'lightmapDirection')
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i388 = root || new UnityEngine.LightProbes()
  var i389 = data
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i396 = root || new pc.UnityMaterial()
  var i397 = data
  i396.name = i397[0]
  request.r(i397[1], i397[2], 0, i396, 'shader')
  i396.renderQueue = i397[3]
  i396.enableInstancing = !!i397[4]
  var i399 = i397[5]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i399[i + 0]) );
  }
  i396.floatParameters = i398
  var i401 = i397[6]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i401[i + 0]) );
  }
  i396.colorParameters = i400
  var i403 = i397[7]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i403[i + 0]) );
  }
  i396.vectorParameters = i402
  var i405 = i397[8]
  var i404 = []
  for(var i = 0; i < i405.length; i += 1) {
    i404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i405[i + 0]) );
  }
  i396.textureParameters = i404
  var i407 = i397[9]
  var i406 = []
  for(var i = 0; i < i407.length; i += 1) {
    i406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i407[i + 0]) );
  }
  i396.materialFlags = i406
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i411 = data
  i410.name = i411[0]
  i410.value = i411[1]
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i415 = data
  i414.name = i415[0]
  i414.value = new pc.Color(i415[1], i415[2], i415[3], i415[4])
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i419 = data
  i418.name = i419[0]
  i418.value = new pc.Vec4( i419[1], i419[2], i419[3], i419[4] )
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i423 = data
  i422.name = i423[0]
  request.r(i423[1], i423[2], 0, i422, 'value')
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i427 = data
  i426.name = i427[0]
  i426.enabled = !!i427[1]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i429 = data
  var i431 = i429[0]
  var i430 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i431.length; i += 1) {
    i430.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i431[i + 0]));
  }
  i428.ShaderCompilationErrors = i430
  i428.name = i429[1]
  i428.guid = i429[2]
  var i433 = i429[3]
  var i432 = []
  for(var i = 0; i < i433.length; i += 1) {
    i432.push( i433[i + 0] );
  }
  i428.shaderDefinedKeywords = i432
  var i435 = i429[4]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i435[i + 0]) );
  }
  i428.passes = i434
  var i437 = i429[5]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i437[i + 0]) );
  }
  i428.usePasses = i436
  var i439 = i429[6]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i439[i + 0]) );
  }
  i428.defaultParameterValues = i438
  request.r(i429[7], i429[8], 0, i428, 'unityFallbackShader')
  i428.readDepth = !!i429[9]
  i428.isCreatedByShaderGraph = !!i429[10]
  i428.compiled = !!i429[11]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i443 = data
  i442.shaderName = i443[0]
  i442.errorMessage = i443[1]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i448 = root || new pc.UnityShaderPass()
  var i449 = data
  i448.id = i449[0]
  i448.subShaderIndex = i449[1]
  i448.name = i449[2]
  i448.passType = i449[3]
  i448.grabPassTextureName = i449[4]
  i448.usePass = !!i449[5]
  i448.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[6], i448.zTest)
  i448.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[7], i448.zWrite)
  i448.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[8], i448.culling)
  i448.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i449[9], i448.blending)
  i448.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i449[10], i448.alphaBlending)
  i448.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[11], i448.colorWriteMask)
  i448.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[12], i448.offsetUnits)
  i448.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[13], i448.offsetFactor)
  i448.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[14], i448.stencilRef)
  i448.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[15], i448.stencilReadMask)
  i448.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[16], i448.stencilWriteMask)
  i448.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i449[17], i448.stencilOp)
  i448.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i449[18], i448.stencilOpFront)
  i448.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i449[19], i448.stencilOpBack)
  var i451 = i449[20]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i451[i + 0]) );
  }
  i448.tags = i450
  var i453 = i449[21]
  var i452 = []
  for(var i = 0; i < i453.length; i += 1) {
    i452.push( i453[i + 0] );
  }
  i448.passDefinedKeywords = i452
  var i455 = i449[22]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i455[i + 0]) );
  }
  i448.passDefinedKeywordGroups = i454
  var i457 = i449[23]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i457[i + 0]) );
  }
  i448.variants = i456
  var i459 = i449[24]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i459[i + 0]) );
  }
  i448.excludedVariants = i458
  i448.hasDepthReader = !!i449[25]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i461 = data
  i460.val = i461[0]
  i460.name = i461[1]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i463 = data
  i462.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i463[0], i462.src)
  i462.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i463[1], i462.dst)
  i462.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i463[2], i462.op)
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i465 = data
  i464.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i465[0], i464.pass)
  i464.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i465[1], i464.fail)
  i464.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i465[2], i464.zFail)
  i464.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i465[3], i464.comp)
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i469 = data
  i468.name = i469[0]
  i468.value = i469[1]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i473 = data
  var i475 = i473[0]
  var i474 = []
  for(var i = 0; i < i475.length; i += 1) {
    i474.push( i475[i + 0] );
  }
  i472.keywords = i474
  i472.hasDiscard = !!i473[1]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i479 = data
  i478.passId = i479[0]
  i478.subShaderIndex = i479[1]
  var i481 = i479[2]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( i481[i + 0] );
  }
  i478.keywords = i480
  i478.vertexProgram = i479[3]
  i478.fragmentProgram = i479[4]
  i478.exportedForWebGl2 = !!i479[5]
  i478.readDepth = !!i479[6]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i485 = data
  request.r(i485[0], i485[1], 0, i484, 'shader')
  i484.pass = i485[2]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i489 = data
  i488.name = i489[0]
  i488.type = i489[1]
  i488.value = new pc.Vec4( i489[2], i489[3], i489[4], i489[5] )
  i488.textureValue = i489[6]
  i488.shaderPropertyFlag = i489[7]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i491 = data
  i490.name = i491[0]
  request.r(i491[1], i491[2], 0, i490, 'texture')
  i490.aabb = i491[3]
  i490.vertices = i491[4]
  i490.triangles = i491[5]
  i490.textureRect = UnityEngine.Rect.MinMaxRect(i491[6], i491[7], i491[8], i491[9])
  i490.packedRect = UnityEngine.Rect.MinMaxRect(i491[10], i491[11], i491[12], i491[13])
  i490.border = new pc.Vec4( i491[14], i491[15], i491[16], i491[17] )
  i490.transparency = i491[18]
  i490.bounds = i491[19]
  i490.pixelsPerUnit = i491[20]
  i490.textureWidth = i491[21]
  i490.textureHeight = i491[22]
  i490.nativeSize = new pc.Vec2( i491[23], i491[24] )
  i490.pivot = new pc.Vec2( i491[25], i491[26] )
  i490.textureRectOffset = new pc.Vec2( i491[27], i491[28] )
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.VideoClip"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.VideoClip' )
  var i493 = data
  i492.name = i493[0]
  i492.width = i493[1]
  i492.height = i493[2]
  i492.frameRate = i493[3]
  i492.frameCount = System.UInt64(i493[4])
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i495 = data
  i494.name = i495[0]
  i494.ascent = i495[1]
  i494.originalLineHeight = i495[2]
  i494.fontSize = i495[3]
  var i497 = i495[4]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i497[i + 0]) );
  }
  i494.characterInfo = i496
  request.r(i495[5], i495[6], 0, i494, 'texture')
  i494.originalFontSize = i495[7]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i501 = data
  i500.index = i501[0]
  i500.advance = i501[1]
  i500.bearing = i501[2]
  i500.glyphWidth = i501[3]
  i500.glyphHeight = i501[4]
  i500.minX = i501[5]
  i500.maxX = i501[6]
  i500.minY = i501[7]
  i500.maxY = i501[8]
  i500.uvBottomLeftX = i501[9]
  i500.uvBottomLeftY = i501[10]
  i500.uvBottomRightX = i501[11]
  i500.uvBottomRightY = i501[12]
  i500.uvTopLeftX = i501[13]
  i500.uvTopLeftY = i501[14]
  i500.uvTopRightX = i501[15]
  i500.uvTopRightY = i501[16]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i503 = data
  var i505 = i503[0]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i505[i + 0]) );
  }
  i502.files = i504
  i502.componentToPrefabIds = i503[1]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i509 = data
  i508.path = i509[0]
  request.r(i509[1], i509[2], 0, i508, 'unityObject')
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i511 = data
  var i513 = i511[0]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i513[i + 0]) );
  }
  i510.scriptsExecutionOrder = i512
  var i515 = i511[1]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i515[i + 0]) );
  }
  i510.sortingLayers = i514
  var i517 = i511[2]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i517[i + 0]) );
  }
  i510.cullingLayers = i516
  i510.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i511[3], i510.timeSettings)
  i510.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i511[4], i510.physicsSettings)
  i510.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i511[5], i510.physics2DSettings)
  i510.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i511[6], i510.qualitySettings)
  i510.enableRealtimeShadows = !!i511[7]
  i510.enableAutoInstancing = !!i511[8]
  i510.enableDynamicBatching = !!i511[9]
  i510.lightmapEncodingQuality = i511[10]
  i510.desiredColorSpace = i511[11]
  var i519 = i511[12]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( i519[i + 0] );
  }
  i510.allTags = i518
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i523 = data
  i522.name = i523[0]
  i522.value = i523[1]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i527 = data
  i526.id = i527[0]
  i526.name = i527[1]
  i526.value = i527[2]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i531 = data
  i530.id = i531[0]
  i530.name = i531[1]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i533 = data
  i532.fixedDeltaTime = i533[0]
  i532.maximumDeltaTime = i533[1]
  i532.timeScale = i533[2]
  i532.maximumParticleTimestep = i533[3]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i535 = data
  i534.gravity = new pc.Vec3( i535[0], i535[1], i535[2] )
  i534.defaultSolverIterations = i535[3]
  i534.bounceThreshold = i535[4]
  i534.autoSyncTransforms = !!i535[5]
  i534.autoSimulation = !!i535[6]
  var i537 = i535[7]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i537[i + 0]) );
  }
  i534.collisionMatrix = i536
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i541 = data
  i540.enabled = !!i541[0]
  i540.layerId = i541[1]
  i540.otherLayerId = i541[2]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'material')
  i542.gravity = new pc.Vec2( i543[2], i543[3] )
  i542.positionIterations = i543[4]
  i542.velocityIterations = i543[5]
  i542.velocityThreshold = i543[6]
  i542.maxLinearCorrection = i543[7]
  i542.maxAngularCorrection = i543[8]
  i542.maxTranslationSpeed = i543[9]
  i542.maxRotationSpeed = i543[10]
  i542.baumgarteScale = i543[11]
  i542.baumgarteTOIScale = i543[12]
  i542.timeToSleep = i543[13]
  i542.linearSleepTolerance = i543[14]
  i542.angularSleepTolerance = i543[15]
  i542.defaultContactOffset = i543[16]
  i542.autoSimulation = !!i543[17]
  i542.queriesHitTriggers = !!i543[18]
  i542.queriesStartInColliders = !!i543[19]
  i542.callbacksOnDisable = !!i543[20]
  i542.reuseCollisionCallbacks = !!i543[21]
  i542.autoSyncTransforms = !!i543[22]
  var i545 = i543[23]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i545[i + 0]) );
  }
  i542.collisionMatrix = i544
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i549 = data
  i548.enabled = !!i549[0]
  i548.layerId = i549[1]
  i548.otherLayerId = i549[2]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i551 = data
  var i553 = i551[0]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i553[i + 0]) );
  }
  i550.qualityLevels = i552
  var i555 = i551[1]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( i555[i + 0] );
  }
  i550.names = i554
  i550.shadows = i551[2]
  i550.anisotropicFiltering = i551[3]
  i550.antiAliasing = i551[4]
  i550.lodBias = i551[5]
  i550.shadowCascades = i551[6]
  i550.shadowDistance = i551[7]
  i550.shadowmaskMode = i551[8]
  i550.shadowProjection = i551[9]
  i550.shadowResolution = i551[10]
  i550.softParticles = !!i551[11]
  i550.softVegetation = !!i551[12]
  i550.activeColorSpace = i551[13]
  i550.desiredColorSpace = i551[14]
  i550.masterTextureLimit = i551[15]
  i550.maxQueuedFrames = i551[16]
  i550.particleRaycastBudget = i551[17]
  i550.pixelLightCount = i551[18]
  i550.realtimeReflectionProbes = !!i551[19]
  i550.shadowCascade2Split = i551[20]
  i550.shadowCascade4Split = new pc.Vec3( i551[21], i551[22], i551[23] )
  i550.streamingMipmapsActive = !!i551[24]
  i550.vSyncCount = i551[25]
  i550.asyncUploadBufferSize = i551[26]
  i550.asyncUploadTimeSlice = i551[27]
  i550.billboardsFaceCameraPosition = !!i551[28]
  i550.shadowNearPlaneOffset = i551[29]
  i550.streamingMipmapsMemoryBudget = i551[30]
  i550.maximumLODLevel = i551[31]
  i550.streamingMipmapsAddAllCameras = !!i551[32]
  i550.streamingMipmapsMaxLevelReduction = i551[33]
  i550.streamingMipmapsRenderersPerFrame = i551[34]
  i550.resolutionScalingFixedDPIFactor = i551[35]
  i550.streamingMipmapsMaxFileIORequests = i551[36]
  i550.currentQualityLevel = i551[37]
  return i550
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i559 = data
  request.r(i559[0], i559[1], 0, i558, 'm_ObjectArgument')
  i558.m_ObjectArgumentAssemblyTypeName = i559[2]
  i558.m_IntArgument = i559[3]
  i558.m_FloatArgument = i559[4]
  i558.m_StringArgument = i559[5]
  i558.m_BoolArgument = !!i559[6]
  return i558
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"colorFormat":6,"depthStencilFormat":7,"renderTextureFormat":8,"depth":9,"wrapU":10,"wrapV":11},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.VideoPlayer":{"enabled":0,"source":1,"clip":2,"url":4,"playOnAwake":5,"isLooping":6,"renderMode":7,"targetTexture":8,"targetMaterialRenderer":10,"targetMaterialProperty":12,"playbackSpeed":13},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.VideoClip":{"name":0,"width":1,"height":2,"frameRate":3,"frameCount":4},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"33":[34],"35":[34],"36":[34],"37":[34],"38":[34],"39":[34],"40":[41],"42":[6],"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[44],"51":[22],"52":[22],"53":[22],"54":[22],"55":[22],"56":[22],"57":[22],"58":[22],"59":[22],"60":[22],"61":[22],"62":[22],"63":[22],"64":[6],"65":[66],"67":[68],"69":[68],"10":[0],"70":[71],"72":[73],"74":[71],"75":[0],"76":[0],"12":[10],"3":[1,0],"77":[0],"11":[10],"78":[0],"79":[0],"80":[0],"81":[0],"82":[0],"83":[0],"84":[0],"85":[0],"86":[0],"13":[1,0],"87":[0],"88":[0],"89":[0],"90":[0],"15":[1,0],"91":[0],"92":[26],"93":[26],"27":[26],"94":[26],"95":[6],"96":[6],"97":[98],"99":[6],"100":[0],"101":[66,0],"102":[0,1],"103":[0],"104":[1,0],"105":[66],"106":[1,0],"107":[0],"108":[71]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","ForcePortrait","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.RawImage","UnityEngine.RenderTexture","UnityEngine.UI.Text","UnityEngine.Font","DragAndDrop.DragAndDropArtillery","RidingHand","TimeController","Spawnlocation","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","ThrobbingHand","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Video.VideoPlayer","UnityEngine.Video.VideoClip","Timer","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.7f1";

Deserializers.productName = "Artilery2.0";

Deserializers.lunaInitializationTime = "04/04/2025 13:22:27";

Deserializers.lunaDaysRunning = "2.8";

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

Deserializers.linearColorSpace = true;

Deserializers.buildID = "6486d872-7f8c-45c8-93c4-48b7be011d69";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

