var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.JointSpring' )
  var i667 = data
  i666.spring = i667[0]
  i666.damper = i667[1]
  i666.targetPosition = i667[2]
  return i666
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.JointMotor' )
  var i669 = data
  i668.m_TargetVelocity = i669[0]
  i668.m_Force = i669[1]
  i668.m_FreeSpin = i669[2]
  return i668
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.JointLimits' )
  var i671 = data
  i670.m_Min = i671[0]
  i670.m_Max = i671[1]
  i670.m_Bounciness = i671[2]
  i670.m_BounceMinVelocity = i671[3]
  i670.m_ContactDistance = i671[4]
  i670.minBounce = i671[5]
  i670.maxBounce = i671[6]
  return i670
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.JointDrive' )
  var i673 = data
  i672.m_PositionSpring = i673[0]
  i672.m_PositionDamper = i673[1]
  i672.m_MaximumForce = i673[2]
  i672.m_UseAcceleration = i673[3]
  return i672
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i675 = data
  i674.m_Spring = i675[0]
  i674.m_Damper = i675[1]
  return i674
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i677 = data
  i676.m_Limit = i677[0]
  i676.m_Bounciness = i677[1]
  i676.m_ContactDistance = i677[2]
  return i676
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i679 = data
  i678.m_ExtremumSlip = i679[0]
  i678.m_ExtremumValue = i679[1]
  i678.m_AsymptoteSlip = i679[2]
  i678.m_AsymptoteValue = i679[3]
  i678.m_Stiffness = i679[4]
  return i678
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i681 = data
  i680.m_LowerAngle = i681[0]
  i680.m_UpperAngle = i681[1]
  return i680
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i683 = data
  i682.m_MotorSpeed = i683[0]
  i682.m_MaximumMotorTorque = i683[1]
  return i682
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i685 = data
  i684.m_DampingRatio = i685[0]
  i684.m_Frequency = i685[1]
  i684.m_Angle = i685[2]
  return i684
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i687 = data
  i686.m_LowerTranslation = i687[0]
  i686.m_UpperTranslation = i687[1]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i689 = data
  i688.name = i689[0]
  i688.width = i689[1]
  i688.height = i689[2]
  i688.anisoLevel = i689[3]
  i688.filterMode = i689[4]
  i688.hdr = !!i689[5]
  i688.colorFormat = i689[6]
  i688.depthStencilFormat = i689[7]
  i688.renderTextureFormat = i689[8]
  i688.depth = i689[9]
  i688.wrapU = i689[10]
  i688.wrapV = i689[11]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i691 = data
  i690.name = i691[0]
  i690.index = i691[1]
  i690.startup = !!i691[2]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i693 = data
  i692.position = new pc.Vec3( i693[0], i693[1], i693[2] )
  i692.scale = new pc.Vec3( i693[3], i693[4], i693[5] )
  i692.rotation = new pc.Quat(i693[6], i693[7], i693[8], i693[9])
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i695 = data
  i694.enabled = !!i695[0]
  i694.aspect = i695[1]
  i694.orthographic = !!i695[2]
  i694.orthographicSize = i695[3]
  i694.backgroundColor = new pc.Color(i695[4], i695[5], i695[6], i695[7])
  i694.nearClipPlane = i695[8]
  i694.farClipPlane = i695[9]
  i694.fieldOfView = i695[10]
  i694.depth = i695[11]
  i694.clearFlags = i695[12]
  i694.cullingMask = i695[13]
  i694.rect = i695[14]
  request.r(i695[15], i695[16], 0, i694, 'targetTexture')
  i694.usePhysicalProperties = !!i695[17]
  i694.focalLength = i695[18]
  i694.sensorSize = new pc.Vec2( i695[19], i695[20] )
  i694.lensShift = new pc.Vec2( i695[21], i695[22] )
  i694.gateFit = i695[23]
  i694.commandBufferCount = i695[24]
  i694.cameraType = i695[25]
  return i694
}

Deserializers["ForcePortrait"] = function (request, data, root) {
  var i696 = root || request.c( 'ForcePortrait' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'canvasRoot')
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i699 = data
  i698.name = i699[0]
  i698.tagId = i699[1]
  i698.enabled = !!i699[2]
  i698.isStatic = !!i699[3]
  i698.layer = i699[4]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i701 = data
  i700.pivot = new pc.Vec2( i701[0], i701[1] )
  i700.anchorMin = new pc.Vec2( i701[2], i701[3] )
  i700.anchorMax = new pc.Vec2( i701[4], i701[5] )
  i700.sizeDelta = new pc.Vec2( i701[6], i701[7] )
  i700.anchoredPosition3D = new pc.Vec3( i701[8], i701[9], i701[10] )
  i700.rotation = new pc.Quat(i701[11], i701[12], i701[13], i701[14])
  i700.scale = new pc.Vec3( i701[15], i701[16], i701[17] )
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i703 = data
  i702.enabled = !!i703[0]
  i702.planeDistance = i703[1]
  i702.referencePixelsPerUnit = i703[2]
  i702.isFallbackOverlay = !!i703[3]
  i702.renderMode = i703[4]
  i702.renderOrder = i703[5]
  i702.sortingLayerName = i703[6]
  i702.sortingOrder = i703[7]
  i702.scaleFactor = i703[8]
  request.r(i703[9], i703[10], 0, i702, 'worldCamera')
  i702.overrideSorting = !!i703[11]
  i702.pixelPerfect = !!i703[12]
  i702.targetDisplay = i703[13]
  i702.overridePixelPerfect = !!i703[14]
  return i702
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i705 = data
  i704.m_UiScaleMode = i705[0]
  i704.m_ReferencePixelsPerUnit = i705[1]
  i704.m_ScaleFactor = i705[2]
  i704.m_ReferenceResolution = new pc.Vec2( i705[3], i705[4] )
  i704.m_ScreenMatchMode = i705[5]
  i704.m_MatchWidthOrHeight = i705[6]
  i704.m_PhysicalUnit = i705[7]
  i704.m_FallbackScreenDPI = i705[8]
  i704.m_DefaultSpriteDPI = i705[9]
  i704.m_DynamicPixelsPerUnit = i705[10]
  i704.m_PresetInfoIsWorld = !!i705[11]
  return i704
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i707 = data
  i706.m_IgnoreReversedGraphics = !!i707[0]
  i706.m_BlockingObjects = i707[1]
  i706.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i707[2] )
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i709 = data
  i708.cullTransparentMesh = !!i709[0]
  return i708
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'm_Texture')
  i710.m_UVRect = UnityEngine.Rect.MinMaxRect(i711[2], i711[3], i711[4], i711[5])
  request.r(i711[6], i711[7], 0, i710, 'm_Material')
  i710.m_Maskable = !!i711[8]
  i710.m_Color = new pc.Color(i711[9], i711[10], i711[11], i711[12])
  i710.m_RaycastTarget = !!i711[13]
  i710.m_RaycastPadding = new pc.Vec4( i711[14], i711[15], i711[16], i711[17] )
  return i710
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.UI.Image' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'm_Sprite')
  i712.m_Type = i713[2]
  i712.m_PreserveAspect = !!i713[3]
  i712.m_FillCenter = !!i713[4]
  i712.m_FillMethod = i713[5]
  i712.m_FillAmount = i713[6]
  i712.m_FillClockwise = !!i713[7]
  i712.m_FillOrigin = i713[8]
  i712.m_UseSpriteMesh = !!i713[9]
  i712.m_PixelsPerUnitMultiplier = i713[10]
  request.r(i713[11], i713[12], 0, i712, 'm_Material')
  i712.m_Maskable = !!i713[13]
  i712.m_Color = new pc.Color(i713[14], i713[15], i713[16], i713[17])
  i712.m_RaycastTarget = !!i713[18]
  i712.m_RaycastPadding = new pc.Vec4( i713[19], i713[20], i713[21], i713[22] )
  return i712
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'm_FirstSelected')
  i714.m_sendNavigationEvents = !!i715[2]
  i714.m_DragThreshold = i715[3]
  return i714
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i717 = data
  i716.m_HorizontalAxis = i717[0]
  i716.m_VerticalAxis = i717[1]
  i716.m_SubmitButton = i717[2]
  i716.m_CancelButton = i717[3]
  i716.m_InputActionsPerSecond = i717[4]
  i716.m_RepeatDelay = i717[5]
  i716.m_ForceModuleActive = !!i717[6]
  i716.m_SendPointerHoverToParent = !!i717[7]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.VideoPlayer"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.VideoPlayer' )
  var i719 = data
  i718.enabled = !!i719[0]
  i718.source = i719[1]
  request.r(i719[2], i719[3], 0, i718, 'clip')
  i718.url = i719[4]
  i718.playOnAwake = !!i719[5]
  i718.isLooping = !!i719[6]
  i718.renderMode = i719[7]
  request.r(i719[8], i719[9], 0, i718, 'targetTexture')
  request.r(i719[10], i719[11], 0, i718, 'targetMaterialRenderer')
  i718.targetMaterialProperty = i719[12]
  i718.playbackSpeed = i719[13]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i721 = data
  i720.ambientIntensity = i721[0]
  i720.reflectionIntensity = i721[1]
  i720.ambientMode = i721[2]
  i720.ambientLight = new pc.Color(i721[3], i721[4], i721[5], i721[6])
  i720.ambientSkyColor = new pc.Color(i721[7], i721[8], i721[9], i721[10])
  i720.ambientGroundColor = new pc.Color(i721[11], i721[12], i721[13], i721[14])
  i720.ambientEquatorColor = new pc.Color(i721[15], i721[16], i721[17], i721[18])
  i720.fogColor = new pc.Color(i721[19], i721[20], i721[21], i721[22])
  i720.fogEndDistance = i721[23]
  i720.fogStartDistance = i721[24]
  i720.fogDensity = i721[25]
  i720.fog = !!i721[26]
  request.r(i721[27], i721[28], 0, i720, 'skybox')
  i720.fogMode = i721[29]
  var i723 = i721[30]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i723[i + 0]) );
  }
  i720.lightmaps = i722
  i720.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i721[31], i720.lightProbes)
  i720.lightmapsMode = i721[32]
  i720.mixedBakeMode = i721[33]
  i720.environmentLightingMode = i721[34]
  i720.ambientProbe = new pc.SphericalHarmonicsL2(i721[35])
  i720.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i721[36])
  i720.useReferenceAmbientProbe = !!i721[37]
  request.r(i721[38], i721[39], 0, i720, 'customReflection')
  request.r(i721[40], i721[41], 0, i720, 'defaultReflection')
  i720.defaultReflectionMode = i721[42]
  i720.defaultReflectionResolution = i721[43]
  i720.sunLightObjectId = i721[44]
  i720.pixelLightCount = i721[45]
  i720.defaultReflectionHDR = !!i721[46]
  i720.hasLightDataAsset = !!i721[47]
  i720.hasManualGenerate = !!i721[48]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'lightmapColor')
  request.r(i727[2], i727[3], 0, i726, 'lightmapDirection')
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i728 = root || new UnityEngine.LightProbes()
  var i729 = data
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i736 = root || new pc.UnityMaterial()
  var i737 = data
  i736.name = i737[0]
  request.r(i737[1], i737[2], 0, i736, 'shader')
  i736.renderQueue = i737[3]
  i736.enableInstancing = !!i737[4]
  var i739 = i737[5]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i739[i + 0]) );
  }
  i736.floatParameters = i738
  var i741 = i737[6]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i741[i + 0]) );
  }
  i736.colorParameters = i740
  var i743 = i737[7]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i743[i + 0]) );
  }
  i736.vectorParameters = i742
  var i745 = i737[8]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i745[i + 0]) );
  }
  i736.textureParameters = i744
  var i747 = i737[9]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i747[i + 0]) );
  }
  i736.materialFlags = i746
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i751 = data
  i750.name = i751[0]
  i750.value = i751[1]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i755 = data
  i754.name = i755[0]
  i754.value = new pc.Color(i755[1], i755[2], i755[3], i755[4])
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i759 = data
  i758.name = i759[0]
  i758.value = new pc.Vec4( i759[1], i759[2], i759[3], i759[4] )
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i763 = data
  i762.name = i763[0]
  request.r(i763[1], i763[2], 0, i762, 'value')
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i767 = data
  i766.name = i767[0]
  i766.enabled = !!i767[1]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i769 = data
  var i771 = i769[0]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i771.length; i += 1) {
    i770.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i771[i + 0]));
  }
  i768.ShaderCompilationErrors = i770
  i768.name = i769[1]
  i768.guid = i769[2]
  var i773 = i769[3]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( i773[i + 0] );
  }
  i768.shaderDefinedKeywords = i772
  var i775 = i769[4]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i775[i + 0]) );
  }
  i768.passes = i774
  var i777 = i769[5]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i777[i + 0]) );
  }
  i768.usePasses = i776
  var i779 = i769[6]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i779[i + 0]) );
  }
  i768.defaultParameterValues = i778
  request.r(i769[7], i769[8], 0, i768, 'unityFallbackShader')
  i768.readDepth = !!i769[9]
  i768.isCreatedByShaderGraph = !!i769[10]
  i768.compiled = !!i769[11]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i783 = data
  i782.shaderName = i783[0]
  i782.errorMessage = i783[1]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i788 = root || new pc.UnityShaderPass()
  var i789 = data
  i788.id = i789[0]
  i788.subShaderIndex = i789[1]
  i788.name = i789[2]
  i788.passType = i789[3]
  i788.grabPassTextureName = i789[4]
  i788.usePass = !!i789[5]
  i788.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i789[6], i788.zTest)
  i788.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i789[7], i788.zWrite)
  i788.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i789[8], i788.culling)
  i788.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i789[9], i788.blending)
  i788.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i789[10], i788.alphaBlending)
  i788.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i789[11], i788.colorWriteMask)
  i788.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i789[12], i788.offsetUnits)
  i788.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i789[13], i788.offsetFactor)
  i788.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i789[14], i788.stencilRef)
  i788.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i789[15], i788.stencilReadMask)
  i788.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i789[16], i788.stencilWriteMask)
  i788.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i789[17], i788.stencilOp)
  i788.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i789[18], i788.stencilOpFront)
  i788.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i789[19], i788.stencilOpBack)
  var i791 = i789[20]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i791[i + 0]) );
  }
  i788.tags = i790
  var i793 = i789[21]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( i793[i + 0] );
  }
  i788.passDefinedKeywords = i792
  var i795 = i789[22]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i795[i + 0]) );
  }
  i788.passDefinedKeywordGroups = i794
  var i797 = i789[23]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i797[i + 0]) );
  }
  i788.variants = i796
  var i799 = i789[24]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i799[i + 0]) );
  }
  i788.excludedVariants = i798
  i788.hasDepthReader = !!i789[25]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i801 = data
  i800.val = i801[0]
  i800.name = i801[1]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i803 = data
  i802.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i803[0], i802.src)
  i802.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i803[1], i802.dst)
  i802.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i803[2], i802.op)
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i805 = data
  i804.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i805[0], i804.pass)
  i804.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i805[1], i804.fail)
  i804.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i805[2], i804.zFail)
  i804.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i805[3], i804.comp)
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i809 = data
  i808.name = i809[0]
  i808.value = i809[1]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i813 = data
  var i815 = i813[0]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( i815[i + 0] );
  }
  i812.keywords = i814
  i812.hasDiscard = !!i813[1]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i819 = data
  i818.passId = i819[0]
  i818.subShaderIndex = i819[1]
  var i821 = i819[2]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( i821[i + 0] );
  }
  i818.keywords = i820
  i818.vertexProgram = i819[3]
  i818.fragmentProgram = i819[4]
  i818.exportedForWebGl2 = !!i819[5]
  i818.readDepth = !!i819[6]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'shader')
  i824.pass = i825[2]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i829 = data
  i828.name = i829[0]
  i828.type = i829[1]
  i828.value = new pc.Vec4( i829[2], i829[3], i829[4], i829[5] )
  i828.textureValue = i829[6]
  i828.shaderPropertyFlag = i829[7]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.VideoClip"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.VideoClip' )
  var i831 = data
  i830.name = i831[0]
  i830.width = i831[1]
  i830.height = i831[2]
  i830.frameRate = i831[3]
  i830.frameCount = System.UInt64(i831[4])
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i833 = data
  var i835 = i833[0]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i835[i + 0]) );
  }
  i832.files = i834
  i832.componentToPrefabIds = i833[1]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i839 = data
  i838.path = i839[0]
  request.r(i839[1], i839[2], 0, i838, 'unityObject')
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i841 = data
  var i843 = i841[0]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i843[i + 0]) );
  }
  i840.scriptsExecutionOrder = i842
  var i845 = i841[1]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i845[i + 0]) );
  }
  i840.sortingLayers = i844
  var i847 = i841[2]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i847[i + 0]) );
  }
  i840.cullingLayers = i846
  i840.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i841[3], i840.timeSettings)
  i840.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i841[4], i840.physicsSettings)
  i840.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i841[5], i840.physics2DSettings)
  i840.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i841[6], i840.qualitySettings)
  i840.enableRealtimeShadows = !!i841[7]
  i840.enableAutoInstancing = !!i841[8]
  i840.enableDynamicBatching = !!i841[9]
  i840.lightmapEncodingQuality = i841[10]
  i840.desiredColorSpace = i841[11]
  var i849 = i841[12]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( i849[i + 0] );
  }
  i840.allTags = i848
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i853 = data
  i852.name = i853[0]
  i852.value = i853[1]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i857 = data
  i856.id = i857[0]
  i856.name = i857[1]
  i856.value = i857[2]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i861 = data
  i860.id = i861[0]
  i860.name = i861[1]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i863 = data
  i862.fixedDeltaTime = i863[0]
  i862.maximumDeltaTime = i863[1]
  i862.timeScale = i863[2]
  i862.maximumParticleTimestep = i863[3]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i865 = data
  i864.gravity = new pc.Vec3( i865[0], i865[1], i865[2] )
  i864.defaultSolverIterations = i865[3]
  i864.bounceThreshold = i865[4]
  i864.autoSyncTransforms = !!i865[5]
  i864.autoSimulation = !!i865[6]
  var i867 = i865[7]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i867[i + 0]) );
  }
  i864.collisionMatrix = i866
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i871 = data
  i870.enabled = !!i871[0]
  i870.layerId = i871[1]
  i870.otherLayerId = i871[2]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'material')
  i872.gravity = new pc.Vec2( i873[2], i873[3] )
  i872.positionIterations = i873[4]
  i872.velocityIterations = i873[5]
  i872.velocityThreshold = i873[6]
  i872.maxLinearCorrection = i873[7]
  i872.maxAngularCorrection = i873[8]
  i872.maxTranslationSpeed = i873[9]
  i872.maxRotationSpeed = i873[10]
  i872.baumgarteScale = i873[11]
  i872.baumgarteTOIScale = i873[12]
  i872.timeToSleep = i873[13]
  i872.linearSleepTolerance = i873[14]
  i872.angularSleepTolerance = i873[15]
  i872.defaultContactOffset = i873[16]
  i872.autoSimulation = !!i873[17]
  i872.queriesHitTriggers = !!i873[18]
  i872.queriesStartInColliders = !!i873[19]
  i872.callbacksOnDisable = !!i873[20]
  i872.reuseCollisionCallbacks = !!i873[21]
  i872.autoSyncTransforms = !!i873[22]
  var i875 = i873[23]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i875[i + 0]) );
  }
  i872.collisionMatrix = i874
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i879 = data
  i878.enabled = !!i879[0]
  i878.layerId = i879[1]
  i878.otherLayerId = i879[2]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i881 = data
  var i883 = i881[0]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i883[i + 0]) );
  }
  i880.qualityLevels = i882
  var i885 = i881[1]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( i885[i + 0] );
  }
  i880.names = i884
  i880.shadows = i881[2]
  i880.anisotropicFiltering = i881[3]
  i880.antiAliasing = i881[4]
  i880.lodBias = i881[5]
  i880.shadowCascades = i881[6]
  i880.shadowDistance = i881[7]
  i880.shadowmaskMode = i881[8]
  i880.shadowProjection = i881[9]
  i880.shadowResolution = i881[10]
  i880.softParticles = !!i881[11]
  i880.softVegetation = !!i881[12]
  i880.activeColorSpace = i881[13]
  i880.desiredColorSpace = i881[14]
  i880.masterTextureLimit = i881[15]
  i880.maxQueuedFrames = i881[16]
  i880.particleRaycastBudget = i881[17]
  i880.pixelLightCount = i881[18]
  i880.realtimeReflectionProbes = !!i881[19]
  i880.shadowCascade2Split = i881[20]
  i880.shadowCascade4Split = new pc.Vec3( i881[21], i881[22], i881[23] )
  i880.streamingMipmapsActive = !!i881[24]
  i880.vSyncCount = i881[25]
  i880.asyncUploadBufferSize = i881[26]
  i880.asyncUploadTimeSlice = i881[27]
  i880.billboardsFaceCameraPosition = !!i881[28]
  i880.shadowNearPlaneOffset = i881[29]
  i880.streamingMipmapsMemoryBudget = i881[30]
  i880.maximumLODLevel = i881[31]
  i880.streamingMipmapsAddAllCameras = !!i881[32]
  i880.streamingMipmapsMaxLevelReduction = i881[33]
  i880.streamingMipmapsRenderersPerFrame = i881[34]
  i880.resolutionScalingFixedDPIFactor = i881[35]
  i880.streamingMipmapsMaxFileIORequests = i881[36]
  i880.currentQualityLevel = i881[37]
  return i880
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"colorFormat":6,"depthStencilFormat":7,"renderTextureFormat":8,"depth":9,"wrapU":10,"wrapV":11},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.VideoPlayer":{"enabled":0,"source":1,"clip":2,"url":4,"playOnAwake":5,"isLooping":6,"renderMode":7,"targetTexture":8,"targetMaterialRenderer":10,"targetMaterialProperty":12,"playbackSpeed":13},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.VideoClip":{"name":0,"width":1,"height":2,"frameRate":3,"frameCount":4},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"19":[20],"21":[20],"22":[20],"23":[20],"24":[20],"25":[20],"26":[27],"28":[1],"29":[30],"31":[30],"32":[30],"33":[30],"34":[30],"35":[30],"36":[30],"37":[38],"39":[38],"40":[38],"41":[38],"42":[38],"43":[38],"44":[38],"45":[38],"46":[38],"47":[38],"48":[38],"49":[38],"50":[38],"51":[1],"52":[53],"54":[55],"56":[55],"6":[5],"57":[58],"59":[60],"61":[58],"62":[5],"63":[5],"9":[6],"13":[10,5],"64":[5],"8":[6],"65":[5],"66":[5],"67":[5],"68":[5],"69":[5],"70":[5],"71":[5],"72":[5],"73":[5],"11":[10,5],"74":[5],"75":[5],"76":[5],"77":[5],"78":[10,5],"79":[5],"80":[14],"81":[14],"15":[14],"82":[14],"83":[1],"84":[1],"85":[86],"87":[1],"88":[5],"89":[53,5],"90":[5,10],"91":[5],"92":[10,5],"93":[53],"94":[10,5],"95":[5],"96":[58]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","ForcePortrait","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.RenderTexture","UnityEngine.UI.Image","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Video.VideoPlayer","UnityEngine.Video.VideoClip","UnityEngine.Shader","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.7f1";

Deserializers.productName = "Artilery2.0";

Deserializers.lunaInitializationTime = "04/04/2025 13:22:27";

Deserializers.lunaDaysRunning = "0.1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1789";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3285";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection, prefabs, mecanim-wasm";

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

Deserializers.buildID = "e9d994c9-afee-4ee7-a167-5a12752f8f53";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

