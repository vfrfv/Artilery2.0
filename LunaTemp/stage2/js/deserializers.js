var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1110 = root || request.c( 'UnityEngine.JointSpring' )
  var i1111 = data
  i1110.spring = i1111[0]
  i1110.damper = i1111[1]
  i1110.targetPosition = i1111[2]
  return i1110
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1112 = root || request.c( 'UnityEngine.JointMotor' )
  var i1113 = data
  i1112.m_TargetVelocity = i1113[0]
  i1112.m_Force = i1113[1]
  i1112.m_FreeSpin = i1113[2]
  return i1112
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1114 = root || request.c( 'UnityEngine.JointLimits' )
  var i1115 = data
  i1114.m_Min = i1115[0]
  i1114.m_Max = i1115[1]
  i1114.m_Bounciness = i1115[2]
  i1114.m_BounceMinVelocity = i1115[3]
  i1114.m_ContactDistance = i1115[4]
  i1114.minBounce = i1115[5]
  i1114.maxBounce = i1115[6]
  return i1114
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1116 = root || request.c( 'UnityEngine.JointDrive' )
  var i1117 = data
  i1116.m_PositionSpring = i1117[0]
  i1116.m_PositionDamper = i1117[1]
  i1116.m_MaximumForce = i1117[2]
  i1116.m_UseAcceleration = i1117[3]
  return i1116
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1118 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1119 = data
  i1118.m_Spring = i1119[0]
  i1118.m_Damper = i1119[1]
  return i1118
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1120 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1121 = data
  i1120.m_Limit = i1121[0]
  i1120.m_Bounciness = i1121[1]
  i1120.m_ContactDistance = i1121[2]
  return i1120
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1122 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1123 = data
  i1122.m_ExtremumSlip = i1123[0]
  i1122.m_ExtremumValue = i1123[1]
  i1122.m_AsymptoteSlip = i1123[2]
  i1122.m_AsymptoteValue = i1123[3]
  i1122.m_Stiffness = i1123[4]
  return i1122
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1124 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1125 = data
  i1124.m_LowerAngle = i1125[0]
  i1124.m_UpperAngle = i1125[1]
  return i1124
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1126 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1127 = data
  i1126.m_MotorSpeed = i1127[0]
  i1126.m_MaximumMotorTorque = i1127[1]
  return i1126
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1128 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1129 = data
  i1128.m_DampingRatio = i1129[0]
  i1128.m_Frequency = i1129[1]
  i1128.m_Angle = i1129[2]
  return i1128
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1130 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1131 = data
  i1130.m_LowerTranslation = i1131[0]
  i1130.m_UpperTranslation = i1131[1]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i1133 = data
  i1132.name = i1133[0]
  i1132.width = i1133[1]
  i1132.height = i1133[2]
  i1132.anisoLevel = i1133[3]
  i1132.filterMode = i1133[4]
  i1132.hdr = !!i1133[5]
  i1132.colorFormat = i1133[6]
  i1132.depthStencilFormat = i1133[7]
  i1132.renderTextureFormat = i1133[8]
  i1132.depth = i1133[9]
  i1132.wrapU = i1133[10]
  i1132.wrapV = i1133[11]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1135 = data
  i1134.name = i1135[0]
  i1134.index = i1135[1]
  i1134.startup = !!i1135[2]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1137 = data
  i1136.position = new pc.Vec3( i1137[0], i1137[1], i1137[2] )
  i1136.scale = new pc.Vec3( i1137[3], i1137[4], i1137[5] )
  i1136.rotation = new pc.Quat(i1137[6], i1137[7], i1137[8], i1137[9])
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1139 = data
  i1138.enabled = !!i1139[0]
  i1138.aspect = i1139[1]
  i1138.orthographic = !!i1139[2]
  i1138.orthographicSize = i1139[3]
  i1138.backgroundColor = new pc.Color(i1139[4], i1139[5], i1139[6], i1139[7])
  i1138.nearClipPlane = i1139[8]
  i1138.farClipPlane = i1139[9]
  i1138.fieldOfView = i1139[10]
  i1138.depth = i1139[11]
  i1138.clearFlags = i1139[12]
  i1138.cullingMask = i1139[13]
  i1138.rect = i1139[14]
  request.r(i1139[15], i1139[16], 0, i1138, 'targetTexture')
  i1138.usePhysicalProperties = !!i1139[17]
  i1138.focalLength = i1139[18]
  i1138.sensorSize = new pc.Vec2( i1139[19], i1139[20] )
  i1138.lensShift = new pc.Vec2( i1139[21], i1139[22] )
  i1138.gateFit = i1139[23]
  i1138.commandBufferCount = i1139[24]
  i1138.cameraType = i1139[25]
  return i1138
}

Deserializers["ForcePortrait"] = function (request, data, root) {
  var i1140 = root || request.c( 'ForcePortrait' )
  var i1141 = data
  request.r(i1141[0], i1141[1], 0, i1140, 'canvasRoot')
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1143 = data
  i1142.name = i1143[0]
  i1142.tagId = i1143[1]
  i1142.enabled = !!i1143[2]
  i1142.isStatic = !!i1143[3]
  i1142.layer = i1143[4]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1145 = data
  i1144.pivot = new pc.Vec2( i1145[0], i1145[1] )
  i1144.anchorMin = new pc.Vec2( i1145[2], i1145[3] )
  i1144.anchorMax = new pc.Vec2( i1145[4], i1145[5] )
  i1144.sizeDelta = new pc.Vec2( i1145[6], i1145[7] )
  i1144.anchoredPosition3D = new pc.Vec3( i1145[8], i1145[9], i1145[10] )
  i1144.rotation = new pc.Quat(i1145[11], i1145[12], i1145[13], i1145[14])
  i1144.scale = new pc.Vec3( i1145[15], i1145[16], i1145[17] )
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1147 = data
  i1146.enabled = !!i1147[0]
  i1146.planeDistance = i1147[1]
  i1146.referencePixelsPerUnit = i1147[2]
  i1146.isFallbackOverlay = !!i1147[3]
  i1146.renderMode = i1147[4]
  i1146.renderOrder = i1147[5]
  i1146.sortingLayerName = i1147[6]
  i1146.sortingOrder = i1147[7]
  i1146.scaleFactor = i1147[8]
  request.r(i1147[9], i1147[10], 0, i1146, 'worldCamera')
  i1146.overrideSorting = !!i1147[11]
  i1146.pixelPerfect = !!i1147[12]
  i1146.targetDisplay = i1147[13]
  i1146.overridePixelPerfect = !!i1147[14]
  return i1146
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1149 = data
  i1148.m_UiScaleMode = i1149[0]
  i1148.m_ReferencePixelsPerUnit = i1149[1]
  i1148.m_ScaleFactor = i1149[2]
  i1148.m_ReferenceResolution = new pc.Vec2( i1149[3], i1149[4] )
  i1148.m_ScreenMatchMode = i1149[5]
  i1148.m_MatchWidthOrHeight = i1149[6]
  i1148.m_PhysicalUnit = i1149[7]
  i1148.m_FallbackScreenDPI = i1149[8]
  i1148.m_DefaultSpriteDPI = i1149[9]
  i1148.m_DynamicPixelsPerUnit = i1149[10]
  i1148.m_PresetInfoIsWorld = !!i1149[11]
  return i1148
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1150 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1151 = data
  i1150.m_IgnoreReversedGraphics = !!i1151[0]
  i1150.m_BlockingObjects = i1151[1]
  i1150.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1151[2] )
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1153 = data
  i1152.cullTransparentMesh = !!i1153[0]
  return i1152
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1154 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1155 = data
  request.r(i1155[0], i1155[1], 0, i1154, 'm_Texture')
  i1154.m_UVRect = UnityEngine.Rect.MinMaxRect(i1155[2], i1155[3], i1155[4], i1155[5])
  request.r(i1155[6], i1155[7], 0, i1154, 'm_Material')
  i1154.m_Maskable = !!i1155[8]
  i1154.m_Color = new pc.Color(i1155[9], i1155[10], i1155[11], i1155[12])
  i1154.m_RaycastTarget = !!i1155[13]
  i1154.m_RaycastPadding = new pc.Vec4( i1155[14], i1155[15], i1155[16], i1155[17] )
  return i1154
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1156 = root || request.c( 'UnityEngine.UI.Image' )
  var i1157 = data
  request.r(i1157[0], i1157[1], 0, i1156, 'm_Sprite')
  i1156.m_Type = i1157[2]
  i1156.m_PreserveAspect = !!i1157[3]
  i1156.m_FillCenter = !!i1157[4]
  i1156.m_FillMethod = i1157[5]
  i1156.m_FillAmount = i1157[6]
  i1156.m_FillClockwise = !!i1157[7]
  i1156.m_FillOrigin = i1157[8]
  i1156.m_UseSpriteMesh = !!i1157[9]
  i1156.m_PixelsPerUnitMultiplier = i1157[10]
  request.r(i1157[11], i1157[12], 0, i1156, 'm_Material')
  i1156.m_Maskable = !!i1157[13]
  i1156.m_Color = new pc.Color(i1157[14], i1157[15], i1157[16], i1157[17])
  i1156.m_RaycastTarget = !!i1157[18]
  i1156.m_RaycastPadding = new pc.Vec4( i1157[19], i1157[20], i1157[21], i1157[22] )
  return i1156
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1158 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1159 = data
  request.r(i1159[0], i1159[1], 0, i1158, 'm_FirstSelected')
  i1158.m_sendNavigationEvents = !!i1159[2]
  i1158.m_DragThreshold = i1159[3]
  return i1158
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1160 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1161 = data
  i1160.m_HorizontalAxis = i1161[0]
  i1160.m_VerticalAxis = i1161[1]
  i1160.m_SubmitButton = i1161[2]
  i1160.m_CancelButton = i1161[3]
  i1160.m_InputActionsPerSecond = i1161[4]
  i1160.m_RepeatDelay = i1161[5]
  i1160.m_ForceModuleActive = !!i1161[6]
  i1160.m_SendPointerHoverToParent = !!i1161[7]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.VideoPlayer"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.VideoPlayer' )
  var i1163 = data
  i1162.enabled = !!i1163[0]
  i1162.source = i1163[1]
  request.r(i1163[2], i1163[3], 0, i1162, 'clip')
  i1162.url = i1163[4]
  i1162.playOnAwake = !!i1163[5]
  i1162.isLooping = !!i1163[6]
  i1162.renderMode = i1163[7]
  request.r(i1163[8], i1163[9], 0, i1162, 'targetTexture')
  request.r(i1163[10], i1163[11], 0, i1162, 'targetMaterialRenderer')
  i1162.targetMaterialProperty = i1163[12]
  i1162.playbackSpeed = i1163[13]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1165 = data
  i1164.ambientIntensity = i1165[0]
  i1164.reflectionIntensity = i1165[1]
  i1164.ambientMode = i1165[2]
  i1164.ambientLight = new pc.Color(i1165[3], i1165[4], i1165[5], i1165[6])
  i1164.ambientSkyColor = new pc.Color(i1165[7], i1165[8], i1165[9], i1165[10])
  i1164.ambientGroundColor = new pc.Color(i1165[11], i1165[12], i1165[13], i1165[14])
  i1164.ambientEquatorColor = new pc.Color(i1165[15], i1165[16], i1165[17], i1165[18])
  i1164.fogColor = new pc.Color(i1165[19], i1165[20], i1165[21], i1165[22])
  i1164.fogEndDistance = i1165[23]
  i1164.fogStartDistance = i1165[24]
  i1164.fogDensity = i1165[25]
  i1164.fog = !!i1165[26]
  request.r(i1165[27], i1165[28], 0, i1164, 'skybox')
  i1164.fogMode = i1165[29]
  var i1167 = i1165[30]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1167[i + 0]) );
  }
  i1164.lightmaps = i1166
  i1164.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1165[31], i1164.lightProbes)
  i1164.lightmapsMode = i1165[32]
  i1164.mixedBakeMode = i1165[33]
  i1164.environmentLightingMode = i1165[34]
  i1164.ambientProbe = new pc.SphericalHarmonicsL2(i1165[35])
  i1164.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1165[36])
  i1164.useReferenceAmbientProbe = !!i1165[37]
  request.r(i1165[38], i1165[39], 0, i1164, 'customReflection')
  request.r(i1165[40], i1165[41], 0, i1164, 'defaultReflection')
  i1164.defaultReflectionMode = i1165[42]
  i1164.defaultReflectionResolution = i1165[43]
  i1164.sunLightObjectId = i1165[44]
  i1164.pixelLightCount = i1165[45]
  i1164.defaultReflectionHDR = !!i1165[46]
  i1164.hasLightDataAsset = !!i1165[47]
  i1164.hasManualGenerate = !!i1165[48]
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1171 = data
  request.r(i1171[0], i1171[1], 0, i1170, 'lightmapColor')
  request.r(i1171[2], i1171[3], 0, i1170, 'lightmapDirection')
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1172 = root || new UnityEngine.LightProbes()
  var i1173 = data
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1180 = root || new pc.UnityMaterial()
  var i1181 = data
  i1180.name = i1181[0]
  request.r(i1181[1], i1181[2], 0, i1180, 'shader')
  i1180.renderQueue = i1181[3]
  i1180.enableInstancing = !!i1181[4]
  var i1183 = i1181[5]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1183[i + 0]) );
  }
  i1180.floatParameters = i1182
  var i1185 = i1181[6]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1185[i + 0]) );
  }
  i1180.colorParameters = i1184
  var i1187 = i1181[7]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1187[i + 0]) );
  }
  i1180.vectorParameters = i1186
  var i1189 = i1181[8]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1189[i + 0]) );
  }
  i1180.textureParameters = i1188
  var i1191 = i1181[9]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1191[i + 0]) );
  }
  i1180.materialFlags = i1190
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1195 = data
  i1194.name = i1195[0]
  i1194.value = i1195[1]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1199 = data
  i1198.name = i1199[0]
  i1198.value = new pc.Color(i1199[1], i1199[2], i1199[3], i1199[4])
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1203 = data
  i1202.name = i1203[0]
  i1202.value = new pc.Vec4( i1203[1], i1203[2], i1203[3], i1203[4] )
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1207 = data
  i1206.name = i1207[0]
  request.r(i1207[1], i1207[2], 0, i1206, 'value')
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1211 = data
  i1210.name = i1211[0]
  i1210.enabled = !!i1211[1]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1213 = data
  var i1215 = i1213[0]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1215[i + 0]));
  }
  i1212.ShaderCompilationErrors = i1214
  i1212.name = i1213[1]
  i1212.guid = i1213[2]
  var i1217 = i1213[3]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( i1217[i + 0] );
  }
  i1212.shaderDefinedKeywords = i1216
  var i1219 = i1213[4]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1219[i + 0]) );
  }
  i1212.passes = i1218
  var i1221 = i1213[5]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1221[i + 0]) );
  }
  i1212.usePasses = i1220
  var i1223 = i1213[6]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1223[i + 0]) );
  }
  i1212.defaultParameterValues = i1222
  request.r(i1213[7], i1213[8], 0, i1212, 'unityFallbackShader')
  i1212.readDepth = !!i1213[9]
  i1212.isCreatedByShaderGraph = !!i1213[10]
  i1212.compiled = !!i1213[11]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1227 = data
  i1226.shaderName = i1227[0]
  i1226.errorMessage = i1227[1]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1232 = root || new pc.UnityShaderPass()
  var i1233 = data
  i1232.id = i1233[0]
  i1232.subShaderIndex = i1233[1]
  i1232.name = i1233[2]
  i1232.passType = i1233[3]
  i1232.grabPassTextureName = i1233[4]
  i1232.usePass = !!i1233[5]
  i1232.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[6], i1232.zTest)
  i1232.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[7], i1232.zWrite)
  i1232.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[8], i1232.culling)
  i1232.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1233[9], i1232.blending)
  i1232.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1233[10], i1232.alphaBlending)
  i1232.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[11], i1232.colorWriteMask)
  i1232.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[12], i1232.offsetUnits)
  i1232.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[13], i1232.offsetFactor)
  i1232.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[14], i1232.stencilRef)
  i1232.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[15], i1232.stencilReadMask)
  i1232.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[16], i1232.stencilWriteMask)
  i1232.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1233[17], i1232.stencilOp)
  i1232.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1233[18], i1232.stencilOpFront)
  i1232.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1233[19], i1232.stencilOpBack)
  var i1235 = i1233[20]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1235[i + 0]) );
  }
  i1232.tags = i1234
  var i1237 = i1233[21]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( i1237[i + 0] );
  }
  i1232.passDefinedKeywords = i1236
  var i1239 = i1233[22]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1239[i + 0]) );
  }
  i1232.passDefinedKeywordGroups = i1238
  var i1241 = i1233[23]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1241[i + 0]) );
  }
  i1232.variants = i1240
  var i1243 = i1233[24]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1243[i + 0]) );
  }
  i1232.excludedVariants = i1242
  i1232.hasDepthReader = !!i1233[25]
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1245 = data
  i1244.val = i1245[0]
  i1244.name = i1245[1]
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1247 = data
  i1246.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[0], i1246.src)
  i1246.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[1], i1246.dst)
  i1246.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[2], i1246.op)
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1249 = data
  i1248.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1249[0], i1248.pass)
  i1248.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1249[1], i1248.fail)
  i1248.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1249[2], i1248.zFail)
  i1248.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1249[3], i1248.comp)
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1253 = data
  i1252.name = i1253[0]
  i1252.value = i1253[1]
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1257 = data
  var i1259 = i1257[0]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( i1259[i + 0] );
  }
  i1256.keywords = i1258
  i1256.hasDiscard = !!i1257[1]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1263 = data
  i1262.passId = i1263[0]
  i1262.subShaderIndex = i1263[1]
  var i1265 = i1263[2]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( i1265[i + 0] );
  }
  i1262.keywords = i1264
  i1262.vertexProgram = i1263[3]
  i1262.fragmentProgram = i1263[4]
  i1262.exportedForWebGl2 = !!i1263[5]
  i1262.readDepth = !!i1263[6]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1269 = data
  request.r(i1269[0], i1269[1], 0, i1268, 'shader')
  i1268.pass = i1269[2]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1273 = data
  i1272.name = i1273[0]
  i1272.type = i1273[1]
  i1272.value = new pc.Vec4( i1273[2], i1273[3], i1273[4], i1273[5] )
  i1272.textureValue = i1273[6]
  i1272.shaderPropertyFlag = i1273[7]
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.VideoClip"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.VideoClip' )
  var i1275 = data
  i1274.name = i1275[0]
  i1274.width = i1275[1]
  i1274.height = i1275[2]
  i1274.frameRate = i1275[3]
  i1274.frameCount = System.UInt64(i1275[4])
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1277 = data
  var i1279 = i1277[0]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1279[i + 0]) );
  }
  i1276.files = i1278
  i1276.componentToPrefabIds = i1277[1]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1283 = data
  i1282.path = i1283[0]
  request.r(i1283[1], i1283[2], 0, i1282, 'unityObject')
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1285 = data
  var i1287 = i1285[0]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1287[i + 0]) );
  }
  i1284.scriptsExecutionOrder = i1286
  var i1289 = i1285[1]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1289[i + 0]) );
  }
  i1284.sortingLayers = i1288
  var i1291 = i1285[2]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1291[i + 0]) );
  }
  i1284.cullingLayers = i1290
  i1284.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1285[3], i1284.timeSettings)
  i1284.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1285[4], i1284.physicsSettings)
  i1284.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1285[5], i1284.physics2DSettings)
  i1284.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1285[6], i1284.qualitySettings)
  i1284.enableRealtimeShadows = !!i1285[7]
  i1284.enableAutoInstancing = !!i1285[8]
  i1284.enableDynamicBatching = !!i1285[9]
  i1284.lightmapEncodingQuality = i1285[10]
  i1284.desiredColorSpace = i1285[11]
  var i1293 = i1285[12]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.push( i1293[i + 0] );
  }
  i1284.allTags = i1292
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1297 = data
  i1296.name = i1297[0]
  i1296.value = i1297[1]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1301 = data
  i1300.id = i1301[0]
  i1300.name = i1301[1]
  i1300.value = i1301[2]
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1305 = data
  i1304.id = i1305[0]
  i1304.name = i1305[1]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1307 = data
  i1306.fixedDeltaTime = i1307[0]
  i1306.maximumDeltaTime = i1307[1]
  i1306.timeScale = i1307[2]
  i1306.maximumParticleTimestep = i1307[3]
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1309 = data
  i1308.gravity = new pc.Vec3( i1309[0], i1309[1], i1309[2] )
  i1308.defaultSolverIterations = i1309[3]
  i1308.bounceThreshold = i1309[4]
  i1308.autoSyncTransforms = !!i1309[5]
  i1308.autoSimulation = !!i1309[6]
  var i1311 = i1309[7]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1311[i + 0]) );
  }
  i1308.collisionMatrix = i1310
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1315 = data
  i1314.enabled = !!i1315[0]
  i1314.layerId = i1315[1]
  i1314.otherLayerId = i1315[2]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1317 = data
  request.r(i1317[0], i1317[1], 0, i1316, 'material')
  i1316.gravity = new pc.Vec2( i1317[2], i1317[3] )
  i1316.positionIterations = i1317[4]
  i1316.velocityIterations = i1317[5]
  i1316.velocityThreshold = i1317[6]
  i1316.maxLinearCorrection = i1317[7]
  i1316.maxAngularCorrection = i1317[8]
  i1316.maxTranslationSpeed = i1317[9]
  i1316.maxRotationSpeed = i1317[10]
  i1316.baumgarteScale = i1317[11]
  i1316.baumgarteTOIScale = i1317[12]
  i1316.timeToSleep = i1317[13]
  i1316.linearSleepTolerance = i1317[14]
  i1316.angularSleepTolerance = i1317[15]
  i1316.defaultContactOffset = i1317[16]
  i1316.autoSimulation = !!i1317[17]
  i1316.queriesHitTriggers = !!i1317[18]
  i1316.queriesStartInColliders = !!i1317[19]
  i1316.callbacksOnDisable = !!i1317[20]
  i1316.reuseCollisionCallbacks = !!i1317[21]
  i1316.autoSyncTransforms = !!i1317[22]
  var i1319 = i1317[23]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1319[i + 0]) );
  }
  i1316.collisionMatrix = i1318
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1323 = data
  i1322.enabled = !!i1323[0]
  i1322.layerId = i1323[1]
  i1322.otherLayerId = i1323[2]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1325 = data
  var i1327 = i1325[0]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1327[i + 0]) );
  }
  i1324.qualityLevels = i1326
  var i1329 = i1325[1]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( i1329[i + 0] );
  }
  i1324.names = i1328
  i1324.shadows = i1325[2]
  i1324.anisotropicFiltering = i1325[3]
  i1324.antiAliasing = i1325[4]
  i1324.lodBias = i1325[5]
  i1324.shadowCascades = i1325[6]
  i1324.shadowDistance = i1325[7]
  i1324.shadowmaskMode = i1325[8]
  i1324.shadowProjection = i1325[9]
  i1324.shadowResolution = i1325[10]
  i1324.softParticles = !!i1325[11]
  i1324.softVegetation = !!i1325[12]
  i1324.activeColorSpace = i1325[13]
  i1324.desiredColorSpace = i1325[14]
  i1324.masterTextureLimit = i1325[15]
  i1324.maxQueuedFrames = i1325[16]
  i1324.particleRaycastBudget = i1325[17]
  i1324.pixelLightCount = i1325[18]
  i1324.realtimeReflectionProbes = !!i1325[19]
  i1324.shadowCascade2Split = i1325[20]
  i1324.shadowCascade4Split = new pc.Vec3( i1325[21], i1325[22], i1325[23] )
  i1324.streamingMipmapsActive = !!i1325[24]
  i1324.vSyncCount = i1325[25]
  i1324.asyncUploadBufferSize = i1325[26]
  i1324.asyncUploadTimeSlice = i1325[27]
  i1324.billboardsFaceCameraPosition = !!i1325[28]
  i1324.shadowNearPlaneOffset = i1325[29]
  i1324.streamingMipmapsMemoryBudget = i1325[30]
  i1324.maximumLODLevel = i1325[31]
  i1324.streamingMipmapsAddAllCameras = !!i1325[32]
  i1324.streamingMipmapsMaxLevelReduction = i1325[33]
  i1324.streamingMipmapsRenderersPerFrame = i1325[34]
  i1324.resolutionScalingFixedDPIFactor = i1325[35]
  i1324.streamingMipmapsMaxFileIORequests = i1325[36]
  i1324.currentQualityLevel = i1325[37]
  return i1324
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

Deserializers.buildID = "7d43e5b1-34c7-4d24-bd6e-0e2e9e4dcdc6";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

