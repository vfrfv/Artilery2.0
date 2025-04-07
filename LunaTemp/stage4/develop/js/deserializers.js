var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1400 = root || request.c( 'UnityEngine.JointSpring' )
  var i1401 = data
  i1400.spring = i1401[0]
  i1400.damper = i1401[1]
  i1400.targetPosition = i1401[2]
  return i1400
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1402 = root || request.c( 'UnityEngine.JointMotor' )
  var i1403 = data
  i1402.m_TargetVelocity = i1403[0]
  i1402.m_Force = i1403[1]
  i1402.m_FreeSpin = i1403[2]
  return i1402
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1404 = root || request.c( 'UnityEngine.JointLimits' )
  var i1405 = data
  i1404.m_Min = i1405[0]
  i1404.m_Max = i1405[1]
  i1404.m_Bounciness = i1405[2]
  i1404.m_BounceMinVelocity = i1405[3]
  i1404.m_ContactDistance = i1405[4]
  i1404.minBounce = i1405[5]
  i1404.maxBounce = i1405[6]
  return i1404
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1406 = root || request.c( 'UnityEngine.JointDrive' )
  var i1407 = data
  i1406.m_PositionSpring = i1407[0]
  i1406.m_PositionDamper = i1407[1]
  i1406.m_MaximumForce = i1407[2]
  i1406.m_UseAcceleration = i1407[3]
  return i1406
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1408 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1409 = data
  i1408.m_Spring = i1409[0]
  i1408.m_Damper = i1409[1]
  return i1408
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1410 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1411 = data
  i1410.m_Limit = i1411[0]
  i1410.m_Bounciness = i1411[1]
  i1410.m_ContactDistance = i1411[2]
  return i1410
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1412 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1413 = data
  i1412.m_ExtremumSlip = i1413[0]
  i1412.m_ExtremumValue = i1413[1]
  i1412.m_AsymptoteSlip = i1413[2]
  i1412.m_AsymptoteValue = i1413[3]
  i1412.m_Stiffness = i1413[4]
  return i1412
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1414 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1415 = data
  i1414.m_LowerAngle = i1415[0]
  i1414.m_UpperAngle = i1415[1]
  return i1414
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1416 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1417 = data
  i1416.m_MotorSpeed = i1417[0]
  i1416.m_MaximumMotorTorque = i1417[1]
  return i1416
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1418 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1419 = data
  i1418.m_DampingRatio = i1419[0]
  i1418.m_Frequency = i1419[1]
  i1418.m_Angle = i1419[2]
  return i1418
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1420 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1421 = data
  i1420.m_LowerTranslation = i1421[0]
  i1420.m_UpperTranslation = i1421[1]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1423 = data
  i1422.name = i1423[0]
  i1422.width = i1423[1]
  i1422.height = i1423[2]
  i1422.mipmapCount = i1423[3]
  i1422.anisoLevel = i1423[4]
  i1422.filterMode = i1423[5]
  i1422.hdr = !!i1423[6]
  i1422.format = i1423[7]
  i1422.wrapMode = i1423[8]
  i1422.alphaIsTransparency = !!i1423[9]
  i1422.alphaSource = i1423[10]
  i1422.graphicsFormat = i1423[11]
  i1422.sRGBTexture = !!i1423[12]
  i1422.desiredColorSpace = i1423[13]
  i1422.wrapU = i1423[14]
  i1422.wrapV = i1423[15]
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1425 = data
  i1424.pivot = new pc.Vec2( i1425[0], i1425[1] )
  i1424.anchorMin = new pc.Vec2( i1425[2], i1425[3] )
  i1424.anchorMax = new pc.Vec2( i1425[4], i1425[5] )
  i1424.sizeDelta = new pc.Vec2( i1425[6], i1425[7] )
  i1424.anchoredPosition3D = new pc.Vec3( i1425[8], i1425[9], i1425[10] )
  i1424.rotation = new pc.Quat(i1425[11], i1425[12], i1425[13], i1425[14])
  i1424.scale = new pc.Vec3( i1425[15], i1425[16], i1425[17] )
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1427 = data
  i1426.cullTransparentMesh = !!i1427[0]
  return i1426
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1428 = root || request.c( 'UnityEngine.UI.Image' )
  var i1429 = data
  request.r(i1429[0], i1429[1], 0, i1428, 'm_Sprite')
  i1428.m_Type = i1429[2]
  i1428.m_PreserveAspect = !!i1429[3]
  i1428.m_FillCenter = !!i1429[4]
  i1428.m_FillMethod = i1429[5]
  i1428.m_FillAmount = i1429[6]
  i1428.m_FillClockwise = !!i1429[7]
  i1428.m_FillOrigin = i1429[8]
  i1428.m_UseSpriteMesh = !!i1429[9]
  i1428.m_PixelsPerUnitMultiplier = i1429[10]
  request.r(i1429[11], i1429[12], 0, i1428, 'm_Material')
  i1428.m_Maskable = !!i1429[13]
  i1428.m_Color = new pc.Color(i1429[14], i1429[15], i1429[16], i1429[17])
  i1428.m_RaycastTarget = !!i1429[18]
  i1428.m_RaycastPadding = new pc.Vec4( i1429[19], i1429[20], i1429[21], i1429[22] )
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1431 = data
  i1430.name = i1431[0]
  i1430.tagId = i1431[1]
  i1430.enabled = !!i1431[2]
  i1430.isStatic = !!i1431[3]
  i1430.layer = i1431[4]
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i1433 = data
  i1432.name = i1433[0]
  i1432.width = i1433[1]
  i1432.height = i1433[2]
  i1432.anisoLevel = i1433[3]
  i1432.filterMode = i1433[4]
  i1432.hdr = !!i1433[5]
  i1432.colorFormat = i1433[6]
  i1432.depthStencilFormat = i1433[7]
  i1432.renderTextureFormat = i1433[8]
  i1432.depth = i1433[9]
  i1432.wrapU = i1433[10]
  i1432.wrapV = i1433[11]
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1435 = data
  i1434.name = i1435[0]
  i1434.index = i1435[1]
  i1434.startup = !!i1435[2]
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1437 = data
  i1436.position = new pc.Vec3( i1437[0], i1437[1], i1437[2] )
  i1436.scale = new pc.Vec3( i1437[3], i1437[4], i1437[5] )
  i1436.rotation = new pc.Quat(i1437[6], i1437[7], i1437[8], i1437[9])
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1439 = data
  i1438.enabled = !!i1439[0]
  i1438.aspect = i1439[1]
  i1438.orthographic = !!i1439[2]
  i1438.orthographicSize = i1439[3]
  i1438.backgroundColor = new pc.Color(i1439[4], i1439[5], i1439[6], i1439[7])
  i1438.nearClipPlane = i1439[8]
  i1438.farClipPlane = i1439[9]
  i1438.fieldOfView = i1439[10]
  i1438.depth = i1439[11]
  i1438.clearFlags = i1439[12]
  i1438.cullingMask = i1439[13]
  i1438.rect = i1439[14]
  request.r(i1439[15], i1439[16], 0, i1438, 'targetTexture')
  i1438.usePhysicalProperties = !!i1439[17]
  i1438.focalLength = i1439[18]
  i1438.sensorSize = new pc.Vec2( i1439[19], i1439[20] )
  i1438.lensShift = new pc.Vec2( i1439[21], i1439[22] )
  i1438.gateFit = i1439[23]
  i1438.commandBufferCount = i1439[24]
  i1438.cameraType = i1439[25]
  return i1438
}

Deserializers["ForcePortrait"] = function (request, data, root) {
  var i1440 = root || request.c( 'ForcePortrait' )
  var i1441 = data
  request.r(i1441[0], i1441[1], 0, i1440, 'canvasRoot')
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1443 = data
  i1442.enabled = !!i1443[0]
  i1442.planeDistance = i1443[1]
  i1442.referencePixelsPerUnit = i1443[2]
  i1442.isFallbackOverlay = !!i1443[3]
  i1442.renderMode = i1443[4]
  i1442.renderOrder = i1443[5]
  i1442.sortingLayerName = i1443[6]
  i1442.sortingOrder = i1443[7]
  i1442.scaleFactor = i1443[8]
  request.r(i1443[9], i1443[10], 0, i1442, 'worldCamera')
  i1442.overrideSorting = !!i1443[11]
  i1442.pixelPerfect = !!i1443[12]
  i1442.targetDisplay = i1443[13]
  i1442.overridePixelPerfect = !!i1443[14]
  return i1442
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1444 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1445 = data
  i1444.m_UiScaleMode = i1445[0]
  i1444.m_ReferencePixelsPerUnit = i1445[1]
  i1444.m_ScaleFactor = i1445[2]
  i1444.m_ReferenceResolution = new pc.Vec2( i1445[3], i1445[4] )
  i1444.m_ScreenMatchMode = i1445[5]
  i1444.m_MatchWidthOrHeight = i1445[6]
  i1444.m_PhysicalUnit = i1445[7]
  i1444.m_FallbackScreenDPI = i1445[8]
  i1444.m_DefaultSpriteDPI = i1445[9]
  i1444.m_DynamicPixelsPerUnit = i1445[10]
  i1444.m_PresetInfoIsWorld = !!i1445[11]
  return i1444
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1446 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1447 = data
  i1446.m_IgnoreReversedGraphics = !!i1447[0]
  i1446.m_BlockingObjects = i1447[1]
  i1446.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1447[2] )
  return i1446
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1448 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1449 = data
  request.r(i1449[0], i1449[1], 0, i1448, 'm_Texture')
  i1448.m_UVRect = UnityEngine.Rect.MinMaxRect(i1449[2], i1449[3], i1449[4], i1449[5])
  request.r(i1449[6], i1449[7], 0, i1448, 'm_Material')
  i1448.m_Maskable = !!i1449[8]
  i1448.m_Color = new pc.Color(i1449[9], i1449[10], i1449[11], i1449[12])
  i1448.m_RaycastTarget = !!i1449[13]
  i1448.m_RaycastPadding = new pc.Vec4( i1449[14], i1449[15], i1449[16], i1449[17] )
  return i1448
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1450 = root || request.c( 'UnityEngine.UI.Text' )
  var i1451 = data
  i1450.m_FontData = request.d('UnityEngine.UI.FontData', i1451[0], i1450.m_FontData)
  i1450.m_Text = i1451[1]
  request.r(i1451[2], i1451[3], 0, i1450, 'm_Material')
  i1450.m_Maskable = !!i1451[4]
  i1450.m_Color = new pc.Color(i1451[5], i1451[6], i1451[7], i1451[8])
  i1450.m_RaycastTarget = !!i1451[9]
  i1450.m_RaycastPadding = new pc.Vec4( i1451[10], i1451[11], i1451[12], i1451[13] )
  return i1450
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1452 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1453 = data
  request.r(i1453[0], i1453[1], 0, i1452, 'm_Font')
  i1452.m_FontSize = i1453[2]
  i1452.m_FontStyle = i1453[3]
  i1452.m_BestFit = !!i1453[4]
  i1452.m_MinSize = i1453[5]
  i1452.m_MaxSize = i1453[6]
  i1452.m_Alignment = i1453[7]
  i1452.m_AlignByGeometry = !!i1453[8]
  i1452.m_RichText = !!i1453[9]
  i1452.m_HorizontalOverflow = i1453[10]
  i1452.m_VerticalOverflow = i1453[11]
  i1452.m_LineSpacing = i1453[12]
  return i1452
}

Deserializers["DragAndDrop.DragAndDropArtillery"] = function (request, data, root) {
  var i1454 = root || request.c( 'DragAndDrop.DragAndDropArtillery' )
  var i1455 = data
  request.r(i1455[0], i1455[1], 0, i1454, '_spritArtillery')
  var i1457 = i1455[2]
  var i1456 = []
  for(var i = 0; i < i1457.length; i += 2) {
  request.r(i1457[i + 0], i1457[i + 1], 2, i1456, '')
  }
  i1454._ridingHands = i1456
  request.r(i1455[3], i1455[4], 0, i1454, '_timeController')
  request.r(i1455[5], i1455[6], 0, i1454, '_spawnLocation')
  request.r(i1455[7], i1455[8], 0, i1454, '_spawnLocation2')
  return i1454
}

Deserializers["RidingHand"] = function (request, data, root) {
  var i1460 = root || request.c( 'RidingHand' )
  var i1461 = data
  i1460._speed = i1461[0]
  i1460._height = i1461[1]
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1463 = data
  i1462.usedByComposite = !!i1463[0]
  i1462.autoTiling = !!i1463[1]
  i1462.size = new pc.Vec2( i1463[2], i1463[3] )
  i1462.edgeRadius = i1463[4]
  i1462.enabled = !!i1463[5]
  i1462.isTrigger = !!i1463[6]
  i1462.usedByEffector = !!i1463[7]
  i1462.density = i1463[8]
  i1462.offset = new pc.Vec2( i1463[9], i1463[10] )
  request.r(i1463[11], i1463[12], 0, i1462, 'material')
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1465 = data
  i1464.bodyType = i1465[0]
  request.r(i1465[1], i1465[2], 0, i1464, 'material')
  i1464.simulated = !!i1465[3]
  i1464.useAutoMass = !!i1465[4]
  i1464.mass = i1465[5]
  i1464.drag = i1465[6]
  i1464.angularDrag = i1465[7]
  i1464.gravityScale = i1465[8]
  i1464.collisionDetectionMode = i1465[9]
  i1464.sleepMode = i1465[10]
  i1464.constraints = i1465[11]
  return i1464
}

Deserializers["Spawnlocation"] = function (request, data, root) {
  var i1466 = root || request.c( 'Spawnlocation' )
  var i1467 = data
  return i1466
}

Deserializers["ThrobbingHand"] = function (request, data, root) {
  var i1468 = root || request.c( 'ThrobbingHand' )
  var i1469 = data
  i1468.scaleSpeed = i1469[0]
  i1468.scaleAmount = i1469[1]
  request.r(i1469[2], i1469[3], 0, i1468, '_button')
  request.r(i1469[4], i1469[5], 0, i1468, '_timeController')
  request.r(i1469[6], i1469[7], 0, i1468, '_pumpingButton')
  return i1468
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1470 = root || request.c( 'UnityEngine.UI.Button' )
  var i1471 = data
  i1470.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1471[0], i1470.m_OnClick)
  i1470.m_Navigation = request.d('UnityEngine.UI.Navigation', i1471[1], i1470.m_Navigation)
  i1470.m_Transition = i1471[2]
  i1470.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1471[3], i1470.m_Colors)
  i1470.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1471[4], i1470.m_SpriteState)
  i1470.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1471[5], i1470.m_AnimationTriggers)
  i1470.m_Interactable = !!i1471[6]
  request.r(i1471[7], i1471[8], 0, i1470, 'm_TargetGraphic')
  return i1470
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1472 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1473 = data
  i1472.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1473[0], i1472.m_PersistentCalls)
  return i1472
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1474 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1475 = data
  var i1477 = i1475[0]
  var i1476 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1477.length; i += 1) {
    i1476.add(request.d('UnityEngine.Events.PersistentCall', i1477[i + 0]));
  }
  i1474.m_Calls = i1476
  return i1474
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1480 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1481 = data
  request.r(i1481[0], i1481[1], 0, i1480, 'm_Target')
  i1480.m_TargetAssemblyTypeName = i1481[2]
  i1480.m_MethodName = i1481[3]
  i1480.m_Mode = i1481[4]
  i1480.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1481[5], i1480.m_Arguments)
  i1480.m_CallState = i1481[6]
  return i1480
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1482 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1483 = data
  i1482.m_Mode = i1483[0]
  i1482.m_WrapAround = !!i1483[1]
  request.r(i1483[2], i1483[3], 0, i1482, 'm_SelectOnUp')
  request.r(i1483[4], i1483[5], 0, i1482, 'm_SelectOnDown')
  request.r(i1483[6], i1483[7], 0, i1482, 'm_SelectOnLeft')
  request.r(i1483[8], i1483[9], 0, i1482, 'm_SelectOnRight')
  return i1482
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1484 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1485 = data
  i1484.m_NormalColor = new pc.Color(i1485[0], i1485[1], i1485[2], i1485[3])
  i1484.m_HighlightedColor = new pc.Color(i1485[4], i1485[5], i1485[6], i1485[7])
  i1484.m_PressedColor = new pc.Color(i1485[8], i1485[9], i1485[10], i1485[11])
  i1484.m_SelectedColor = new pc.Color(i1485[12], i1485[13], i1485[14], i1485[15])
  i1484.m_DisabledColor = new pc.Color(i1485[16], i1485[17], i1485[18], i1485[19])
  i1484.m_ColorMultiplier = i1485[20]
  i1484.m_FadeDuration = i1485[21]
  return i1484
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1486 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1487 = data
  request.r(i1487[0], i1487[1], 0, i1486, 'm_HighlightedSprite')
  request.r(i1487[2], i1487[3], 0, i1486, 'm_PressedSprite')
  request.r(i1487[4], i1487[5], 0, i1486, 'm_SelectedSprite')
  request.r(i1487[6], i1487[7], 0, i1486, 'm_DisabledSprite')
  return i1486
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1488 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1489 = data
  i1488.m_NormalTrigger = i1489[0]
  i1488.m_HighlightedTrigger = i1489[1]
  i1488.m_PressedTrigger = i1489[2]
  i1488.m_SelectedTrigger = i1489[3]
  i1488.m_DisabledTrigger = i1489[4]
  return i1488
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1490 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1491 = data
  request.r(i1491[0], i1491[1], 0, i1490, 'm_FirstSelected')
  i1490.m_sendNavigationEvents = !!i1491[2]
  i1490.m_DragThreshold = i1491[3]
  return i1490
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1492 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1493 = data
  i1492.m_HorizontalAxis = i1493[0]
  i1492.m_VerticalAxis = i1493[1]
  i1492.m_SubmitButton = i1493[2]
  i1492.m_CancelButton = i1493[3]
  i1492.m_InputActionsPerSecond = i1493[4]
  i1492.m_RepeatDelay = i1493[5]
  i1492.m_ForceModuleActive = !!i1493[6]
  i1492.m_SendPointerHoverToParent = !!i1493[7]
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.VideoPlayer"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.VideoPlayer' )
  var i1495 = data
  i1494.enabled = !!i1495[0]
  i1494.source = i1495[1]
  request.r(i1495[2], i1495[3], 0, i1494, 'clip')
  i1494.url = i1495[4]
  i1494.playOnAwake = !!i1495[5]
  i1494.isLooping = !!i1495[6]
  i1494.renderMode = i1495[7]
  request.r(i1495[8], i1495[9], 0, i1494, 'targetTexture')
  request.r(i1495[10], i1495[11], 0, i1494, 'targetMaterialRenderer')
  i1494.targetMaterialProperty = i1495[12]
  i1494.playbackSpeed = i1495[13]
  return i1494
}

Deserializers["TimeController"] = function (request, data, root) {
  var i1496 = root || request.c( 'TimeController' )
  var i1497 = data
  request.r(i1497[0], i1497[1], 0, i1496, '_timer')
  request.r(i1497[2], i1497[3], 0, i1496, '_videoPlayer')
  request.r(i1497[4], i1497[5], 0, i1496, '_slidingHand1')
  request.r(i1497[6], i1497[7], 0, i1496, '_slidingHand2')
  request.r(i1497[8], i1497[9], 0, i1496, '_slidingHand3')
  request.r(i1497[10], i1497[11], 0, i1496, '_pumping1')
  request.r(i1497[12], i1497[13], 0, i1496, '_pumping2')
  request.r(i1497[14], i1497[15], 0, i1496, '_dragAndDropArtillery1')
  request.r(i1497[16], i1497[17], 0, i1496, '_dragAndDropArtillery2')
  request.r(i1497[18], i1497[19], 0, i1496, '_dragAndDropArtillery3')
  return i1496
}

Deserializers["Timer"] = function (request, data, root) {
  var i1498 = root || request.c( 'Timer' )
  var i1499 = data
  request.r(i1499[0], i1499[1], 0, i1498, '_icons')
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1501 = data
  i1500.ambientIntensity = i1501[0]
  i1500.reflectionIntensity = i1501[1]
  i1500.ambientMode = i1501[2]
  i1500.ambientLight = new pc.Color(i1501[3], i1501[4], i1501[5], i1501[6])
  i1500.ambientSkyColor = new pc.Color(i1501[7], i1501[8], i1501[9], i1501[10])
  i1500.ambientGroundColor = new pc.Color(i1501[11], i1501[12], i1501[13], i1501[14])
  i1500.ambientEquatorColor = new pc.Color(i1501[15], i1501[16], i1501[17], i1501[18])
  i1500.fogColor = new pc.Color(i1501[19], i1501[20], i1501[21], i1501[22])
  i1500.fogEndDistance = i1501[23]
  i1500.fogStartDistance = i1501[24]
  i1500.fogDensity = i1501[25]
  i1500.fog = !!i1501[26]
  request.r(i1501[27], i1501[28], 0, i1500, 'skybox')
  i1500.fogMode = i1501[29]
  var i1503 = i1501[30]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1503[i + 0]) );
  }
  i1500.lightmaps = i1502
  i1500.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1501[31], i1500.lightProbes)
  i1500.lightmapsMode = i1501[32]
  i1500.mixedBakeMode = i1501[33]
  i1500.environmentLightingMode = i1501[34]
  i1500.ambientProbe = new pc.SphericalHarmonicsL2(i1501[35])
  i1500.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1501[36])
  i1500.useReferenceAmbientProbe = !!i1501[37]
  request.r(i1501[38], i1501[39], 0, i1500, 'customReflection')
  request.r(i1501[40], i1501[41], 0, i1500, 'defaultReflection')
  i1500.defaultReflectionMode = i1501[42]
  i1500.defaultReflectionResolution = i1501[43]
  i1500.sunLightObjectId = i1501[44]
  i1500.pixelLightCount = i1501[45]
  i1500.defaultReflectionHDR = !!i1501[46]
  i1500.hasLightDataAsset = !!i1501[47]
  i1500.hasManualGenerate = !!i1501[48]
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1507 = data
  request.r(i1507[0], i1507[1], 0, i1506, 'lightmapColor')
  request.r(i1507[2], i1507[3], 0, i1506, 'lightmapDirection')
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1508 = root || new UnityEngine.LightProbes()
  var i1509 = data
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1516 = root || new pc.UnityMaterial()
  var i1517 = data
  i1516.name = i1517[0]
  request.r(i1517[1], i1517[2], 0, i1516, 'shader')
  i1516.renderQueue = i1517[3]
  i1516.enableInstancing = !!i1517[4]
  var i1519 = i1517[5]
  var i1518 = []
  for(var i = 0; i < i1519.length; i += 1) {
    i1518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1519[i + 0]) );
  }
  i1516.floatParameters = i1518
  var i1521 = i1517[6]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1521[i + 0]) );
  }
  i1516.colorParameters = i1520
  var i1523 = i1517[7]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1523[i + 0]) );
  }
  i1516.vectorParameters = i1522
  var i1525 = i1517[8]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 1) {
    i1524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1525[i + 0]) );
  }
  i1516.textureParameters = i1524
  var i1527 = i1517[9]
  var i1526 = []
  for(var i = 0; i < i1527.length; i += 1) {
    i1526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1527[i + 0]) );
  }
  i1516.materialFlags = i1526
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1531 = data
  i1530.name = i1531[0]
  i1530.value = i1531[1]
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1535 = data
  i1534.name = i1535[0]
  i1534.value = new pc.Color(i1535[1], i1535[2], i1535[3], i1535[4])
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1539 = data
  i1538.name = i1539[0]
  i1538.value = new pc.Vec4( i1539[1], i1539[2], i1539[3], i1539[4] )
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1543 = data
  i1542.name = i1543[0]
  request.r(i1543[1], i1543[2], 0, i1542, 'value')
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1547 = data
  i1546.name = i1547[0]
  i1546.enabled = !!i1547[1]
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1549 = data
  var i1551 = i1549[0]
  var i1550 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1551.length; i += 1) {
    i1550.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1551[i + 0]));
  }
  i1548.ShaderCompilationErrors = i1550
  i1548.name = i1549[1]
  i1548.guid = i1549[2]
  var i1553 = i1549[3]
  var i1552 = []
  for(var i = 0; i < i1553.length; i += 1) {
    i1552.push( i1553[i + 0] );
  }
  i1548.shaderDefinedKeywords = i1552
  var i1555 = i1549[4]
  var i1554 = []
  for(var i = 0; i < i1555.length; i += 1) {
    i1554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1555[i + 0]) );
  }
  i1548.passes = i1554
  var i1557 = i1549[5]
  var i1556 = []
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1557[i + 0]) );
  }
  i1548.usePasses = i1556
  var i1559 = i1549[6]
  var i1558 = []
  for(var i = 0; i < i1559.length; i += 1) {
    i1558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1559[i + 0]) );
  }
  i1548.defaultParameterValues = i1558
  request.r(i1549[7], i1549[8], 0, i1548, 'unityFallbackShader')
  i1548.readDepth = !!i1549[9]
  i1548.isCreatedByShaderGraph = !!i1549[10]
  i1548.compiled = !!i1549[11]
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1563 = data
  i1562.shaderName = i1563[0]
  i1562.errorMessage = i1563[1]
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1568 = root || new pc.UnityShaderPass()
  var i1569 = data
  i1568.id = i1569[0]
  i1568.subShaderIndex = i1569[1]
  i1568.name = i1569[2]
  i1568.passType = i1569[3]
  i1568.grabPassTextureName = i1569[4]
  i1568.usePass = !!i1569[5]
  i1568.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1569[6], i1568.zTest)
  i1568.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1569[7], i1568.zWrite)
  i1568.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1569[8], i1568.culling)
  i1568.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1569[9], i1568.blending)
  i1568.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1569[10], i1568.alphaBlending)
  i1568.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1569[11], i1568.colorWriteMask)
  i1568.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1569[12], i1568.offsetUnits)
  i1568.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1569[13], i1568.offsetFactor)
  i1568.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1569[14], i1568.stencilRef)
  i1568.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1569[15], i1568.stencilReadMask)
  i1568.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1569[16], i1568.stencilWriteMask)
  i1568.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1569[17], i1568.stencilOp)
  i1568.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1569[18], i1568.stencilOpFront)
  i1568.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1569[19], i1568.stencilOpBack)
  var i1571 = i1569[20]
  var i1570 = []
  for(var i = 0; i < i1571.length; i += 1) {
    i1570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1571[i + 0]) );
  }
  i1568.tags = i1570
  var i1573 = i1569[21]
  var i1572 = []
  for(var i = 0; i < i1573.length; i += 1) {
    i1572.push( i1573[i + 0] );
  }
  i1568.passDefinedKeywords = i1572
  var i1575 = i1569[22]
  var i1574 = []
  for(var i = 0; i < i1575.length; i += 1) {
    i1574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1575[i + 0]) );
  }
  i1568.passDefinedKeywordGroups = i1574
  var i1577 = i1569[23]
  var i1576 = []
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1577[i + 0]) );
  }
  i1568.variants = i1576
  var i1579 = i1569[24]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1579[i + 0]) );
  }
  i1568.excludedVariants = i1578
  i1568.hasDepthReader = !!i1569[25]
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1581 = data
  i1580.val = i1581[0]
  i1580.name = i1581[1]
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1583 = data
  i1582.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1583[0], i1582.src)
  i1582.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1583[1], i1582.dst)
  i1582.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1583[2], i1582.op)
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1585 = data
  i1584.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1585[0], i1584.pass)
  i1584.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1585[1], i1584.fail)
  i1584.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1585[2], i1584.zFail)
  i1584.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1585[3], i1584.comp)
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1589 = data
  i1588.name = i1589[0]
  i1588.value = i1589[1]
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1593 = data
  var i1595 = i1593[0]
  var i1594 = []
  for(var i = 0; i < i1595.length; i += 1) {
    i1594.push( i1595[i + 0] );
  }
  i1592.keywords = i1594
  i1592.hasDiscard = !!i1593[1]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1599 = data
  i1598.passId = i1599[0]
  i1598.subShaderIndex = i1599[1]
  var i1601 = i1599[2]
  var i1600 = []
  for(var i = 0; i < i1601.length; i += 1) {
    i1600.push( i1601[i + 0] );
  }
  i1598.keywords = i1600
  i1598.vertexProgram = i1599[3]
  i1598.fragmentProgram = i1599[4]
  i1598.exportedForWebGl2 = !!i1599[5]
  i1598.readDepth = !!i1599[6]
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1605 = data
  request.r(i1605[0], i1605[1], 0, i1604, 'shader')
  i1604.pass = i1605[2]
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1609 = data
  i1608.name = i1609[0]
  i1608.type = i1609[1]
  i1608.value = new pc.Vec4( i1609[2], i1609[3], i1609[4], i1609[5] )
  i1608.textureValue = i1609[6]
  i1608.shaderPropertyFlag = i1609[7]
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1611 = data
  i1610.name = i1611[0]
  request.r(i1611[1], i1611[2], 0, i1610, 'texture')
  i1610.aabb = i1611[3]
  i1610.vertices = i1611[4]
  i1610.triangles = i1611[5]
  i1610.textureRect = UnityEngine.Rect.MinMaxRect(i1611[6], i1611[7], i1611[8], i1611[9])
  i1610.packedRect = UnityEngine.Rect.MinMaxRect(i1611[10], i1611[11], i1611[12], i1611[13])
  i1610.border = new pc.Vec4( i1611[14], i1611[15], i1611[16], i1611[17] )
  i1610.transparency = i1611[18]
  i1610.bounds = i1611[19]
  i1610.pixelsPerUnit = i1611[20]
  i1610.textureWidth = i1611[21]
  i1610.textureHeight = i1611[22]
  i1610.nativeSize = new pc.Vec2( i1611[23], i1611[24] )
  i1610.pivot = new pc.Vec2( i1611[25], i1611[26] )
  i1610.textureRectOffset = new pc.Vec2( i1611[27], i1611[28] )
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.VideoClip"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.VideoClip' )
  var i1613 = data
  i1612.name = i1613[0]
  i1612.width = i1613[1]
  i1612.height = i1613[2]
  i1612.frameRate = i1613[3]
  i1612.frameCount = System.UInt64(i1613[4])
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1615 = data
  i1614.name = i1615[0]
  i1614.ascent = i1615[1]
  i1614.originalLineHeight = i1615[2]
  i1614.fontSize = i1615[3]
  var i1617 = i1615[4]
  var i1616 = []
  for(var i = 0; i < i1617.length; i += 1) {
    i1616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1617[i + 0]) );
  }
  i1614.characterInfo = i1616
  request.r(i1615[5], i1615[6], 0, i1614, 'texture')
  i1614.originalFontSize = i1615[7]
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1621 = data
  i1620.index = i1621[0]
  i1620.advance = i1621[1]
  i1620.bearing = i1621[2]
  i1620.glyphWidth = i1621[3]
  i1620.glyphHeight = i1621[4]
  i1620.minX = i1621[5]
  i1620.maxX = i1621[6]
  i1620.minY = i1621[7]
  i1620.maxY = i1621[8]
  i1620.uvBottomLeftX = i1621[9]
  i1620.uvBottomLeftY = i1621[10]
  i1620.uvBottomRightX = i1621[11]
  i1620.uvBottomRightY = i1621[12]
  i1620.uvTopLeftX = i1621[13]
  i1620.uvTopLeftY = i1621[14]
  i1620.uvTopRightX = i1621[15]
  i1620.uvTopRightY = i1621[16]
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1623 = data
  var i1625 = i1623[0]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1625[i + 0]) );
  }
  i1622.files = i1624
  i1622.componentToPrefabIds = i1623[1]
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1629 = data
  i1628.path = i1629[0]
  request.r(i1629[1], i1629[2], 0, i1628, 'unityObject')
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1631 = data
  var i1633 = i1631[0]
  var i1632 = []
  for(var i = 0; i < i1633.length; i += 1) {
    i1632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1633[i + 0]) );
  }
  i1630.scriptsExecutionOrder = i1632
  var i1635 = i1631[1]
  var i1634 = []
  for(var i = 0; i < i1635.length; i += 1) {
    i1634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1635[i + 0]) );
  }
  i1630.sortingLayers = i1634
  var i1637 = i1631[2]
  var i1636 = []
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1637[i + 0]) );
  }
  i1630.cullingLayers = i1636
  i1630.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1631[3], i1630.timeSettings)
  i1630.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1631[4], i1630.physicsSettings)
  i1630.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1631[5], i1630.physics2DSettings)
  i1630.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1631[6], i1630.qualitySettings)
  i1630.enableRealtimeShadows = !!i1631[7]
  i1630.enableAutoInstancing = !!i1631[8]
  i1630.enableDynamicBatching = !!i1631[9]
  i1630.lightmapEncodingQuality = i1631[10]
  i1630.desiredColorSpace = i1631[11]
  var i1639 = i1631[12]
  var i1638 = []
  for(var i = 0; i < i1639.length; i += 1) {
    i1638.push( i1639[i + 0] );
  }
  i1630.allTags = i1638
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1643 = data
  i1642.name = i1643[0]
  i1642.value = i1643[1]
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1647 = data
  i1646.id = i1647[0]
  i1646.name = i1647[1]
  i1646.value = i1647[2]
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1651 = data
  i1650.id = i1651[0]
  i1650.name = i1651[1]
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1653 = data
  i1652.fixedDeltaTime = i1653[0]
  i1652.maximumDeltaTime = i1653[1]
  i1652.timeScale = i1653[2]
  i1652.maximumParticleTimestep = i1653[3]
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1655 = data
  i1654.gravity = new pc.Vec3( i1655[0], i1655[1], i1655[2] )
  i1654.defaultSolverIterations = i1655[3]
  i1654.bounceThreshold = i1655[4]
  i1654.autoSyncTransforms = !!i1655[5]
  i1654.autoSimulation = !!i1655[6]
  var i1657 = i1655[7]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1657[i + 0]) );
  }
  i1654.collisionMatrix = i1656
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1661 = data
  i1660.enabled = !!i1661[0]
  i1660.layerId = i1661[1]
  i1660.otherLayerId = i1661[2]
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1663 = data
  request.r(i1663[0], i1663[1], 0, i1662, 'material')
  i1662.gravity = new pc.Vec2( i1663[2], i1663[3] )
  i1662.positionIterations = i1663[4]
  i1662.velocityIterations = i1663[5]
  i1662.velocityThreshold = i1663[6]
  i1662.maxLinearCorrection = i1663[7]
  i1662.maxAngularCorrection = i1663[8]
  i1662.maxTranslationSpeed = i1663[9]
  i1662.maxRotationSpeed = i1663[10]
  i1662.baumgarteScale = i1663[11]
  i1662.baumgarteTOIScale = i1663[12]
  i1662.timeToSleep = i1663[13]
  i1662.linearSleepTolerance = i1663[14]
  i1662.angularSleepTolerance = i1663[15]
  i1662.defaultContactOffset = i1663[16]
  i1662.autoSimulation = !!i1663[17]
  i1662.queriesHitTriggers = !!i1663[18]
  i1662.queriesStartInColliders = !!i1663[19]
  i1662.callbacksOnDisable = !!i1663[20]
  i1662.reuseCollisionCallbacks = !!i1663[21]
  i1662.autoSyncTransforms = !!i1663[22]
  var i1665 = i1663[23]
  var i1664 = []
  for(var i = 0; i < i1665.length; i += 1) {
    i1664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1665[i + 0]) );
  }
  i1662.collisionMatrix = i1664
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1669 = data
  i1668.enabled = !!i1669[0]
  i1668.layerId = i1669[1]
  i1668.otherLayerId = i1669[2]
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1671 = data
  var i1673 = i1671[0]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1673[i + 0]) );
  }
  i1670.qualityLevels = i1672
  var i1675 = i1671[1]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.push( i1675[i + 0] );
  }
  i1670.names = i1674
  i1670.shadows = i1671[2]
  i1670.anisotropicFiltering = i1671[3]
  i1670.antiAliasing = i1671[4]
  i1670.lodBias = i1671[5]
  i1670.shadowCascades = i1671[6]
  i1670.shadowDistance = i1671[7]
  i1670.shadowmaskMode = i1671[8]
  i1670.shadowProjection = i1671[9]
  i1670.shadowResolution = i1671[10]
  i1670.softParticles = !!i1671[11]
  i1670.softVegetation = !!i1671[12]
  i1670.activeColorSpace = i1671[13]
  i1670.desiredColorSpace = i1671[14]
  i1670.masterTextureLimit = i1671[15]
  i1670.maxQueuedFrames = i1671[16]
  i1670.particleRaycastBudget = i1671[17]
  i1670.pixelLightCount = i1671[18]
  i1670.realtimeReflectionProbes = !!i1671[19]
  i1670.shadowCascade2Split = i1671[20]
  i1670.shadowCascade4Split = new pc.Vec3( i1671[21], i1671[22], i1671[23] )
  i1670.streamingMipmapsActive = !!i1671[24]
  i1670.vSyncCount = i1671[25]
  i1670.asyncUploadBufferSize = i1671[26]
  i1670.asyncUploadTimeSlice = i1671[27]
  i1670.billboardsFaceCameraPosition = !!i1671[28]
  i1670.shadowNearPlaneOffset = i1671[29]
  i1670.streamingMipmapsMemoryBudget = i1671[30]
  i1670.maximumLODLevel = i1671[31]
  i1670.streamingMipmapsAddAllCameras = !!i1671[32]
  i1670.streamingMipmapsMaxLevelReduction = i1671[33]
  i1670.streamingMipmapsRenderersPerFrame = i1671[34]
  i1670.resolutionScalingFixedDPIFactor = i1671[35]
  i1670.streamingMipmapsMaxFileIORequests = i1671[36]
  i1670.currentQualityLevel = i1671[37]
  return i1670
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1678 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1679 = data
  request.r(i1679[0], i1679[1], 0, i1678, 'm_ObjectArgument')
  i1678.m_ObjectArgumentAssemblyTypeName = i1679[2]
  i1678.m_IntArgument = i1679[3]
  i1678.m_FloatArgument = i1679[4]
  i1678.m_StringArgument = i1679[5]
  i1678.m_BoolArgument = !!i1679[6]
  return i1678
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"colorFormat":6,"depthStencilFormat":7,"renderTextureFormat":8,"depth":9,"wrapU":10,"wrapV":11},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.VideoPlayer":{"enabled":0,"source":1,"clip":2,"url":4,"playOnAwake":5,"isLooping":6,"renderMode":7,"targetTexture":8,"targetMaterialRenderer":10,"targetMaterialProperty":12,"playbackSpeed":13},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.VideoClip":{"name":0,"width":1,"height":2,"frameRate":3,"frameCount":4},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"33":[34],"35":[34],"36":[34],"37":[34],"38":[34],"39":[34],"40":[41],"42":[6],"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[44],"51":[22],"52":[22],"53":[22],"54":[22],"55":[22],"56":[22],"57":[22],"58":[22],"59":[22],"60":[22],"61":[22],"62":[22],"63":[22],"64":[6],"65":[66],"67":[68],"69":[68],"10":[0],"70":[71],"72":[73],"74":[71],"75":[0],"76":[0],"12":[10],"3":[1,0],"77":[0],"11":[10],"78":[0],"79":[0],"80":[0],"81":[0],"82":[0],"83":[0],"84":[0],"85":[0],"86":[0],"13":[1,0],"87":[0],"88":[0],"89":[0],"90":[0],"15":[1,0],"91":[0],"92":[26],"93":[26],"27":[26],"94":[26],"95":[6],"96":[6],"97":[98],"99":[6],"100":[0],"101":[66,0],"102":[0,1],"103":[0],"104":[1,0],"105":[66],"106":[1,0],"107":[0],"108":[71]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","ForcePortrait","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.RawImage","UnityEngine.RenderTexture","UnityEngine.UI.Text","UnityEngine.Font","DragAndDrop.DragAndDropArtillery","RidingHand","TimeController","Spawnlocation","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","ThrobbingHand","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Video.VideoPlayer","UnityEngine.Video.VideoClip","Timer","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.7f1";

Deserializers.productName = "Artilery2.0";

Deserializers.lunaInitializationTime = "04/04/2025 13:22:27";

Deserializers.lunaDaysRunning = "2.0";

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

Deserializers.buildID = "3de7a145-4dce-4a69-9706-b93c2ae677ce";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

