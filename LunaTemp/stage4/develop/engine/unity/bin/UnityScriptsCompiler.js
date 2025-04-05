if ( TRACE ) { TRACE( JSON.parse( '["ForcePortrait#Update"]' ) ); }
/**
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*ForcePortrait start.*/
    Bridge.define("ForcePortrait", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            canvasRoot: null
        },
        methods: {
            /*ForcePortrait.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ForcePortrait#Update", this ); }

                if (UnityEngine.Screen.width > UnityEngine.Screen.height) {
                    this.canvasRoot.rotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, 90.0 );
                } else {
                    this.canvasRoot.rotation = pc.Quat.IDENTITY.clone();
                }
            },
            /*ForcePortrait.Update end.*/


        }
    });
    /*ForcePortrait end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine"];

    /*ForcePortrait start.*/
    $m("ForcePortrait", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"canvasRoot","t":4,"rt":$n[1].RectTransform,"sn":"canvasRoot"}]}; }, $n);
    /*ForcePortrait end.*/

    }});
