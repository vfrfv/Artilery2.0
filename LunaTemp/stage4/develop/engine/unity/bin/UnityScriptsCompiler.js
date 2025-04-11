if ( TRACE ) { TRACE( JSON.parse( '["DragAndDrop.DragAndDropArtillery#init","DragAndDrop.DragAndDropArtillery#Awake","DragAndDrop.DragAndDropArtillery#Activate","DragAndDrop.DragAndDropArtillery#OnBeginDrag","DragAndDrop.DragAndDropArtillery#OnDrag","DragAndDrop.DragAndDropArtillery#OnEndDrag","DragAndDrop.DragAndDropArtillery#FindSpawnLocation","DragAndDrop.DragAndDropArtillery#TurnHands","ForcePortrait#IsPortrait#get","ForcePortrait#Start","ForcePortrait#Update","ForcePortrait#CheckOrientation","RidingHand#init","RidingHand#Start","RidingHand#Update","Spawnlocation#Start","Spawnlocation#Update","ThrobbingHand#init","ThrobbingHand#OnEnable","ThrobbingHand#OnDisable","ThrobbingHand#Start","ThrobbingHand#Update","ThrobbingHand#Pumping","TimeController#init","TimeController#OnEnable","TimeController#OnDisable","TimeController#Stop","TimeController#Play","TimeController#PlayGame","TimeController#DisableHintDisplay","TimeController#Pause1","TimeController#Pause2","TimeController#Pause3","TimeController#Pause5","TimeController#Pause6","TimeController#OrientationCorrection","Timer#TimeElapsed#get","Timer#init","Timer#Start","Timer#Update","Timer#StartTimer","Timer#StopTimer","Timer#UpdateTimerDisplay"]' ) ); }
/**
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*DragAndDrop.DragAndDropArtillery start.*/
    Bridge.define("DragAndDrop.DragAndDropArtillery", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IBeginDragHandler,UnityEngine.EventSystems.IEventSystemHandler,UnityEngine.EventSystems.IEndDragHandler,UnityEngine.EventSystems.IDragHandler],
        fields: {
            Hits: null,
            _spritArtillery: null,
            _ridingHands: null,
            _timeController: null,
            _spawnLocation: null,
            _spawnLocation2: null,
            _mainCamera: null,
            _spritArtilleryInstance: null,
            _isActive: false,
            _isReplay: false
        },
        alias: [
            "OnBeginDrag", "UnityEngine$EventSystems$IBeginDragHandler$OnBeginDrag",
            "OnDrag", "UnityEngine$EventSystems$IDragHandler$OnDrag",
            "OnEndDrag", "UnityEngine$EventSystems$IEndDragHandler$OnEndDrag"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DragAndDrop.DragAndDropArtillery#init", this ); }

                this.Hits = System.Array.init(10, function (){
                    return new UnityEngine.RaycastHit();
                }, UnityEngine.RaycastHit);
                this._isActive = false;
                this._isReplay = false;
            }
        },
        methods: {
            /*DragAndDrop.DragAndDropArtillery.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "DragAndDrop.DragAndDropArtillery#Awake", this ); }

                this._mainCamera = UnityEngine.Camera.main;
            },
            /*DragAndDrop.DragAndDropArtillery.Awake end.*/

            /*DragAndDrop.DragAndDropArtillery.Activate start.*/
            Activate: function () {
if ( TRACE ) { TRACE( "DragAndDrop.DragAndDropArtillery#Activate", this ); }

                this._isActive = true;
            },
            /*DragAndDrop.DragAndDropArtillery.Activate end.*/

            /*DragAndDrop.DragAndDropArtillery.OnBeginDrag start.*/
            OnBeginDrag: function (eventData) {
if ( TRACE ) { TRACE( "DragAndDrop.DragAndDropArtillery#OnBeginDrag", this ); }

                if (this._isActive) {
                    this._spritArtilleryInstance = UnityEngine.Object.Instantiate(UnityEngine.UI.Image, this._spritArtillery, this._spritArtillery.transform.parent);
                    this._spritArtilleryInstance.gameObject.SetActive(true);
                    if (!this._isReplay) {
                        this._spawnLocation.gameObject.SetActive(true);
                    } else {
                        this._spawnLocation2.gameObject.SetActive(true);
                    }
                }
            },
            /*DragAndDrop.DragAndDropArtillery.OnBeginDrag end.*/

            /*DragAndDrop.DragAndDropArtillery.OnDrag start.*/
            OnDrag: function (eventData) {
if ( TRACE ) { TRACE( "DragAndDrop.DragAndDropArtillery#OnDrag", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this._spritArtillery, null)) {
                    this._spritArtilleryInstance.transform.position = UnityEngine.Vector3.FromVector2(eventData.position.$clone());
                }
            },
            /*DragAndDrop.DragAndDropArtillery.OnDrag end.*/

            /*DragAndDrop.DragAndDropArtillery.OnEndDrag start.*/
            OnEndDrag: function (eventData) {
if ( TRACE ) { TRACE( "DragAndDrop.DragAndDropArtillery#OnEndDrag", this ); }

                if (this.FindSpawnLocation()) {
                    this._timeController.PlayGame();
                    this._timeController.DisableHintDisplay();
                    this._spritArtilleryInstance.gameObject.SetActive(false);
                    if (!this._isReplay) {
                        this._spawnLocation.gameObject.SetActive(false);
                    } else {
                        this._spawnLocation2.gameObject.SetActive(false);
                    }
                    this.TurnHands();
                    this._isReplay = true;
                    this._isActive = false;
                }
                this._spritArtilleryInstance.gameObject.SetActive(false);
            },
            /*DragAndDrop.DragAndDropArtillery.OnEndDrag end.*/

            /*DragAndDrop.DragAndDropArtillery.FindSpawnLocation start.*/
            FindSpawnLocation: function () {
if ( TRACE ) { TRACE( "DragAndDrop.DragAndDropArtillery#FindSpawnLocation", this ); }

                var $t;
                var pointerData = ($t = new UnityEngine.EventSystems.PointerEventData(UnityEngine.EventSystems.EventSystem.current), $t.position = UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone()), $t);
                var results = new (System.Collections.Generic.List$1(UnityEngine.EventSystems.RaycastResult)).ctor();
                var raycaster = this.GetComponentInParent(UnityEngine.Canvas).GetComponent(UnityEngine.UI.GraphicRaycaster);
                raycaster.Raycast(pointerData, results);
                $t = Bridge.getEnumerator(results);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current.$clone();
                        if (UnityEngine.MonoBehaviour.op_Inequality(item.gameObject.GetComponent(Spawnlocation), null)) {
                            return true;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return false;
            },
            /*DragAndDrop.DragAndDropArtillery.FindSpawnLocation end.*/

            /*DragAndDrop.DragAndDropArtillery.TurnHands start.*/
            TurnHands: function () {
if ( TRACE ) { TRACE( "DragAndDrop.DragAndDropArtillery#TurnHands", this ); }

                var $t;
                var ridingHands = this._ridingHands;
                $t = Bridge.getEnumerator(ridingHands);
                try {
                    while ($t.moveNext()) {
                        var hand = $t.Current;
                        hand.gameObject.SetActive(false);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*DragAndDrop.DragAndDropArtillery.TurnHands end.*/


        }
    });
    /*DragAndDrop.DragAndDropArtillery end.*/

    /*ForcePortrait start.*/
    Bridge.define("ForcePortrait", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _canvas1: null,
            _canvas2: null,
            _isPortrait: false
        },
        events: {
            IsPortraitChanged: null
        },
        props: {
            IsPortrait: {
                get: function () {
if ( TRACE ) { TRACE( "ForcePortrait#IsPortrait#get", this ); }

                    return this._isPortrait;
                }
            }
        },
        methods: {
            /*ForcePortrait.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ForcePortrait#Start", this ); }

                this.CheckOrientation();
            },
            /*ForcePortrait.Start end.*/

            /*ForcePortrait.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ForcePortrait#Update", this ); }

                if ((this._isPortrait && UnityEngine.Screen.width > UnityEngine.Screen.height) || (!this._isPortrait && UnityEngine.Screen.height > UnityEngine.Screen.width)) {
                    this.CheckOrientation();
                }
            },
            /*ForcePortrait.Update end.*/

            /*ForcePortrait.CheckOrientation start.*/
            CheckOrientation: function () {
if ( TRACE ) { TRACE( "ForcePortrait#CheckOrientation", this ); }

                if (UnityEngine.Screen.height > UnityEngine.Screen.width) {
                    this._isPortrait = true;
                    !Bridge.staticEquals(this.IsPortraitChanged, null) ? this.IsPortraitChanged() : null;
                    this._canvas1.SetActive(true);
                    this._canvas2.SetActive(false);
                } else {
                    this._isPortrait = false;
                    !Bridge.staticEquals(this.IsPortraitChanged, null) ? this.IsPortraitChanged() : null;
                    this._canvas1.SetActive(false);
                    this._canvas2.SetActive(true);
                }
            },
            /*ForcePortrait.CheckOrientation end.*/


        }
    });
    /*ForcePortrait end.*/

    /*RidingHand start.*/
    Bridge.define("RidingHand", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _speed: 0,
            _height: 0,
            _startPos: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "RidingHand#init", this ); }

                this._startPos = new UnityEngine.Vector3();
                this._speed = 2.0;
                this._height = 50.0;
            }
        },
        methods: {
            /*RidingHand.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "RidingHand#Start", this ); }

                this._startPos = this.transform.localPosition.$clone();
            },
            /*RidingHand.Start end.*/

            /*RidingHand.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "RidingHand#Update", this ); }

                var newY = this._startPos.y + Math.sin(UnityEngine.Time.time * this._speed) * this._height;
                this.transform.localPosition = new pc.Vec3( this._startPos.x, newY, this._startPos.z );
            },
            /*RidingHand.Update end.*/


        }
    });
    /*RidingHand end.*/

    /*Spawnlocation start.*/
    Bridge.define("Spawnlocation", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*Spawnlocation.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Spawnlocation#Start", this ); }
 },
            /*Spawnlocation.Start end.*/

            /*Spawnlocation.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Spawnlocation#Update", this ); }
 },
            /*Spawnlocation.Update end.*/


        }
    });
    /*Spawnlocation end.*/

    /*ThrobbingHand start.*/
    Bridge.define("ThrobbingHand", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            scaleSpeed: 0,
            scaleAmount: 0,
            _button: null,
            _timeController: null,
            _pumpingButton: null,
            startPos: null,
            startScale: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ThrobbingHand#init", this ); }

                this.startPos = new UnityEngine.Vector3();
                this.startScale = new UnityEngine.Vector3();
                this.scaleSpeed = 2.0;
                this.scaleAmount = 0.2;
            }
        },
        methods: {
            /*ThrobbingHand.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "ThrobbingHand#OnEnable", this ); }

                this._button.onClick.AddListener(Bridge.fn.cacheBind(this, this.Pumping));
            },
            /*ThrobbingHand.OnEnable end.*/

            /*ThrobbingHand.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "ThrobbingHand#OnDisable", this ); }

                this._button.onClick.RemoveListener(Bridge.fn.cacheBind(this, this.Pumping));
            },
            /*ThrobbingHand.OnDisable end.*/

            /*ThrobbingHand.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ThrobbingHand#Start", this ); }

                this.startPos = this.transform.localPosition.$clone();
                this.startScale = this.transform.localScale.$clone();
            },
            /*ThrobbingHand.Start end.*/

            /*ThrobbingHand.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ThrobbingHand#Update", this ); }

                var scaleModifier = 1.0 + Math.sin(UnityEngine.Time.time * this.scaleSpeed) * this.scaleAmount;
                this.transform.localScale = this.startScale.$clone().clone().scale( scaleModifier );
            },
            /*ThrobbingHand.Update end.*/

            /*ThrobbingHand.Pumping start.*/
            Pumping: function () {
if ( TRACE ) { TRACE( "ThrobbingHand#Pumping", this ); }

                this._timeController.PlayGame();
                this._timeController.DisableHintDisplay();
                this._pumpingButton.gameObject.SetActive(false);
                Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(false);
            },
            /*ThrobbingHand.Pumping end.*/


        }
    });
    /*ThrobbingHand end.*/

    /*TimeController start.*/
    Bridge.define("TimeController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _timer: null,
            _videoPlayer: null,
            _videoPlayer2: null,
            _forcePortrait: null,
            _slidingHand1: null,
            _slidingHand1g: null,
            _slidingHand2: null,
            _slidingHand2g: null,
            _slidingHand3: null,
            _slidingHand3g: null,
            _pumping1: null,
            _pumping1g: null,
            _pumping2: null,
            _pumping2g: null,
            _dragAndDropArtillery1: null,
            _dragAndDropArtillery1g: null,
            _dragAndDropArtillery2: null,
            _dragAndDropArtillery2g: null,
            _dragAndDropArtillery3: null,
            _dragAndDropArtillery3g: null,
            _isPause1: false,
            _isPause2: false,
            _isPause3: false,
            _isPause4: false,
            _isPause5: false,
            _isPause6: false,
            _isShowsHints: false,
            _activeHint: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TimeController#init", this ); }

                this._isPause1 = false;
                this._isPause2 = false;
                this._isPause3 = false;
                this._isPause4 = false;
                this._isPause5 = false;
                this._isPause6 = false;
                this._isShowsHints = false;
                this._activeHint = TimeController.ActiveHintType.None;
            }
        },
        methods: {
            /*TimeController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "TimeController#OnEnable", this ); }

                this._timer.addStopVideo1(Bridge.fn.cacheBind(this, this.Pause1));
                this._timer.addStopVideo2(Bridge.fn.cacheBind(this, this.Pause2));
                this._timer.addStopVideo3(Bridge.fn.cacheBind(this, this.Pause3));
                this._timer.addStopVideo4(Bridge.fn.cacheBind(this, this.Pause1));
                this._timer.addStopVideo5(Bridge.fn.cacheBind(this, this.Pause5));
                this._timer.addStopVideo6(Bridge.fn.cacheBind(this, this.Pause6));
                this._forcePortrait.addIsPortraitChanged(Bridge.fn.cacheBind(this, this.OrientationCorrection));
            },
            /*TimeController.OnEnable end.*/

            /*TimeController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "TimeController#OnDisable", this ); }

                this._timer.removeStopVideo1(Bridge.fn.cacheBind(this, this.Pause1));
                this._timer.removeStopVideo2(Bridge.fn.cacheBind(this, this.Pause2));
                this._timer.removeStopVideo3(Bridge.fn.cacheBind(this, this.Pause3));
                this._timer.removeStopVideo4(Bridge.fn.cacheBind(this, this.Pause1));
                this._timer.removeStopVideo5(Bridge.fn.cacheBind(this, this.Pause5));
                this._timer.removeStopVideo6(Bridge.fn.cacheBind(this, this.Pause6));
                this._forcePortrait.addIsPortraitChanged(Bridge.fn.cacheBind(this, this.OrientationCorrection));
            },
            /*TimeController.OnDisable end.*/

            /*TimeController.Stop start.*/
            Stop: function () {
if ( TRACE ) { TRACE( "TimeController#Stop", this ); }

                this._timer.StopTimer();
                this._videoPlayer.Pause();
                this._videoPlayer2.Pause();
            },
            /*TimeController.Stop end.*/

            /*TimeController.Play start.*/
            Play: function () {
if ( TRACE ) { TRACE( "TimeController#Play", this ); }

                this._videoPlayer.Play();
                this._videoPlayer2.Play();
                this._timer.StartTimer();
            },
            /*TimeController.Play end.*/

            /*TimeController.PlayGame start.*/
            PlayGame: function () {
if ( TRACE ) { TRACE( "TimeController#PlayGame", this ); }

                this.Play();
            },
            /*TimeController.PlayGame end.*/

            /*TimeController.DisableHintDisplay start.*/
            DisableHintDisplay: function () {
if ( TRACE ) { TRACE( "TimeController#DisableHintDisplay", this ); }

                this._isShowsHints = false;
            },
            /*TimeController.DisableHintDisplay end.*/

            /*TimeController.Pause1 start.*/
            Pause1: function () {
if ( TRACE ) { TRACE( "TimeController#Pause1", this ); }

                if (!this._isPause1) {
                    this._isShowsHints = true;
                    this._activeHint = TimeController.ActiveHintType.Hint1;
                    this.Stop();
                    if (this._forcePortrait.IsPortrait) {
                        this._dragAndDropArtillery1.Activate();
                        this._slidingHand1.gameObject.SetActive(true);
                    } else {
                        this._dragAndDropArtillery1g.Activate();
                        this._slidingHand1g.gameObject.SetActive(true);
                    }
                    this._isPause1 = true;
                } else if (this._isPause1 && !this._isPause4) {
                    this._isShowsHints = true;
                    this._activeHint = TimeController.ActiveHintType.Hint4;
                    this.Stop();
                    if (this._forcePortrait.IsPortrait) {
                        this._dragAndDropArtillery1.Activate();
                        this._slidingHand1.gameObject.SetActive(true);
                    } else {
                        this._dragAndDropArtillery1g.Activate();
                        this._slidingHand1g.gameObject.SetActive(true);
                    }
                    this._isPause4 = true;
                }
            },
            /*TimeController.Pause1 end.*/

            /*TimeController.Pause2 start.*/
            Pause2: function () {
if ( TRACE ) { TRACE( "TimeController#Pause2", this ); }

                if (!this._isPause2) {
                    this._isShowsHints = true;
                    this._activeHint = TimeController.ActiveHintType.Hint2;
                    this.Stop();
                    if (this._forcePortrait.IsPortrait) {
                        this._dragAndDropArtillery2.Activate();
                        this._slidingHand2.gameObject.SetActive(true);
                    } else {
                        this._dragAndDropArtillery2g.Activate();
                        this._slidingHand2g.gameObject.SetActive(true);
                    }
                    this._isPause2 = true;
                }
            },
            /*TimeController.Pause2 end.*/

            /*TimeController.Pause3 start.*/
            Pause3: function () {
if ( TRACE ) { TRACE( "TimeController#Pause3", this ); }

                if (!this._isPause3) {
                    this._isShowsHints = true;
                    this._activeHint = TimeController.ActiveHintType.Hint3;
                    this.Stop();
                    if (this._forcePortrait.IsPortrait) {
                        this._pumping1.gameObject.SetActive(true);
                    } else {
                        this._pumping1g.gameObject.SetActive(true);
                    }
                    this._isPause3 = true;
                }
            },
            /*TimeController.Pause3 end.*/

            /*TimeController.Pause5 start.*/
            Pause5: function () {
if ( TRACE ) { TRACE( "TimeController#Pause5", this ); }

                if (!this._isPause5) {
                    this._isShowsHints = true;
                    this._activeHint = TimeController.ActiveHintType.Hint5;
                    this.Stop();
                    if (this._forcePortrait.IsPortrait) {
                        this._pumping2.gameObject.SetActive(true);
                    } else {
                        this._pumping2g.gameObject.SetActive(true);
                    }
                    this._isPause5 = true;
                }
            },
            /*TimeController.Pause5 end.*/

            /*TimeController.Pause6 start.*/
            Pause6: function () {
if ( TRACE ) { TRACE( "TimeController#Pause6", this ); }

                if (!this._isPause6) {
                    this._isShowsHints = true;
                    this._activeHint = TimeController.ActiveHintType.Hint6;
                    this.Stop();
                    if (this._forcePortrait.IsPortrait) {
                        this._dragAndDropArtillery3.Activate();
                        this._slidingHand3.gameObject.SetActive(true);
                    } else {
                        this._dragAndDropArtillery3g.Activate();
                        this._slidingHand3g.gameObject.SetActive(true);
                    }
                    this._isPause6 = true;
                }
            },
            /*TimeController.Pause6 end.*/

            /*TimeController.OrientationCorrection start.*/
            OrientationCorrection: function () {
if ( TRACE ) { TRACE( "TimeController#OrientationCorrection", this ); }

                if (!this._isShowsHints || this._activeHint === TimeController.ActiveHintType.None) {
                    return;
                }
                switch (this._activeHint) {
                    case TimeController.ActiveHintType.Hint1: 
                        if (this._forcePortrait.IsPortrait) {
                            this._dragAndDropArtillery1.Activate();
                            this._slidingHand1.gameObject.SetActive(true);
                            this._slidingHand1g.gameObject.SetActive(false);
                        } else {
                            this._dragAndDropArtillery1g.Activate();
                            this._slidingHand1.gameObject.SetActive(false);
                            this._slidingHand1g.gameObject.SetActive(true);
                        }
                        break;
                    case TimeController.ActiveHintType.Hint2: 
                        if (this._forcePortrait.IsPortrait) {
                            this._dragAndDropArtillery2.Activate();
                            this._slidingHand2.gameObject.SetActive(true);
                            this._slidingHand2g.gameObject.SetActive(false);
                        } else {
                            this._dragAndDropArtillery2g.Activate();
                            this._slidingHand2.gameObject.SetActive(false);
                            this._slidingHand2g.gameObject.SetActive(true);
                        }
                        break;
                    case TimeController.ActiveHintType.Hint3: 
                        this._pumping1.SetActive(this._forcePortrait.IsPortrait);
                        this._pumping1g.SetActive(!this._forcePortrait.IsPortrait);
                        break;
                    case TimeController.ActiveHintType.Hint5: 
                        this._pumping2.SetActive(this._forcePortrait.IsPortrait);
                        this._pumping2g.SetActive(!this._forcePortrait.IsPortrait);
                        break;
                    case TimeController.ActiveHintType.Hint6: 
                        if (this._forcePortrait.IsPortrait) {
                            this._dragAndDropArtillery3.Activate();
                            this._slidingHand3.gameObject.SetActive(true);
                            this._slidingHand3g.gameObject.SetActive(false);
                        } else {
                            this._dragAndDropArtillery3g.Activate();
                            this._slidingHand3.gameObject.SetActive(false);
                            this._slidingHand3g.gameObject.SetActive(true);
                        }
                        break;
                    case TimeController.ActiveHintType.Hint4: 
                        break;
                }
            },
            /*TimeController.OrientationCorrection end.*/


        }
    });
    /*TimeController end.*/

    /*TimeController+ActiveHintType start.*/
    Bridge.define("TimeController.ActiveHintType", {
        $kind: 1006,
        statics: {
            fields: {
                None: 0,
                Hint1: 1,
                Hint2: 2,
                Hint3: 3,
                Hint4: 4,
                Hint5: 5,
                Hint6: 6
            }
        }
    });
    /*TimeController+ActiveHintType end.*/

    /*Timer start.*/
    Bridge.define("Timer", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _icons: null,
            _icons2: null,
            _timeElapsed: 0,
            _isRunning: false,
            _isPausing1: false,
            _isPausing2: false,
            _isPausing3: false,
            _isPausing4: false,
            _isPausing5: false,
            _isPausing6: false
        },
        events: {
            StopVideo1: null,
            StopVideo2: null,
            StopVideo3: null,
            StopVideo4: null,
            StopVideo5: null,
            StopVideo6: null
        },
        props: {
            TimeElapsed: {
                get: function () {
if ( TRACE ) { TRACE( "Timer#TimeElapsed#get", this ); }

                    return this._timeElapsed;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Timer#init", this ); }

                this._isRunning = false;
                this._isPausing1 = false;
                this._isPausing2 = false;
                this._isPausing3 = false;
                this._isPausing4 = false;
                this._isPausing5 = false;
                this._isPausing6 = false;
            }
        },
        methods: {
            /*Timer.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Timer#Start", this ); }

                this.StartTimer();
            },
            /*Timer.Start end.*/

            /*Timer.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Timer#Update", this ); }

                if (this._isRunning) {
                    this._timeElapsed += UnityEngine.Time.deltaTime;
                    this.UpdateTimerDisplay();
                }
                if (this._timeElapsed >= 3.7) {
                    this._icons.gameObject.SetActive(true);
                    this._icons2.gameObject.SetActive(true);
                }
                if (this._timeElapsed >= 5.3 && !this._isPausing1) {
                    !Bridge.staticEquals(this.StopVideo1, null) ? this.StopVideo1() : null;
                    this._isPausing1 = true;
                }
                if (this._timeElapsed >= 10.5 && !this._isPausing2) {
                    !Bridge.staticEquals(this.StopVideo2, null) ? this.StopVideo2() : null;
                    this._isPausing2 = true;
                }
                if (this._timeElapsed >= 14.0 && !this._isPausing3) {
                    !Bridge.staticEquals(this.StopVideo3, null) ? this.StopVideo3() : null;
                    this._isPausing3 = true;
                }
                if (this._timeElapsed >= 17.6 && !this._isPausing4) {
                    !Bridge.staticEquals(this.StopVideo4, null) ? this.StopVideo4() : null;
                    this._isPausing4 = true;
                }
                if (this._timeElapsed >= 20.1 && !this._isPausing5) {
                    !Bridge.staticEquals(this.StopVideo5, null) ? this.StopVideo5() : null;
                    this._isPausing5 = true;
                }
                if (this._timeElapsed >= 25.5 && !this._isPausing6) {
                    !Bridge.staticEquals(this.StopVideo6, null) ? this.StopVideo6() : null;
                    this._isPausing6 = true;
                }
                if (this._timeElapsed >= 28.7) {
                    this._icons.gameObject.SetActive(false);
                    this._icons2.gameObject.SetActive(false);
                }
            },
            /*Timer.Update end.*/

            /*Timer.StartTimer start.*/
            StartTimer: function () {
if ( TRACE ) { TRACE( "Timer#StartTimer", this ); }

                this._isRunning = true;
            },
            /*Timer.StartTimer end.*/

            /*Timer.StopTimer start.*/
            StopTimer: function () {
if ( TRACE ) { TRACE( "Timer#StopTimer", this ); }

                this._isRunning = false;
            },
            /*Timer.StopTimer end.*/

            /*Timer.UpdateTimerDisplay start.*/
            UpdateTimerDisplay: function () {
if ( TRACE ) { TRACE( "Timer#UpdateTimerDisplay", this ); }

                var seconds = Bridge.Int.clip32(this._timeElapsed);
                var milliseconds = Bridge.Int.clip32((this._timeElapsed - seconds) * 1000.0);
            },
            /*Timer.UpdateTimerDisplay end.*/


        }
    });
    /*Timer end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","UnityEngine.UI","DragAndDrop","UnityEngine.Video","UnityEngine.EventSystems"];

    /*ForcePortrait start.*/
    $m("ForcePortrait", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CheckOrientation","t":8,"sn":"CheckOrientation","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"IsPortrait","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsPortrait","t":8,"rt":$n[0].Boolean,"fg":"IsPortrait","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsPortrait"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_canvas1","t":4,"rt":$n[1].GameObject,"sn":"_canvas1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_canvas2","t":4,"rt":$n[1].GameObject,"sn":"_canvas2"},{"a":1,"n":"_isPortrait","t":4,"rt":$n[0].Boolean,"sn":"_isPortrait","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsPortraitChanged","t":2,"ad":{"a":2,"n":"add_IsPortraitChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addIsPortraitChanged","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_IsPortraitChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeIsPortraitChanged","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*ForcePortrait end.*/

    /*RidingHand start.*/
    $m("RidingHand", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_height","t":4,"rt":$n[0].Single,"sn":"_height","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_speed","t":4,"rt":$n[0].Single,"sn":"_speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_startPos","t":4,"rt":$n[1].Vector3,"sn":"_startPos"}]}; }, $n);
    /*RidingHand end.*/

    /*Spawnlocation start.*/
    $m("Spawnlocation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void}]}; }, $n);
    /*Spawnlocation end.*/

    /*ThrobbingHand start.*/
    $m("ThrobbingHand", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"Pumping","t":8,"sn":"Pumping","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_button","t":4,"rt":$n[2].Button,"sn":"_button"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pumpingButton","t":4,"rt":$n[1].GameObject,"sn":"_pumpingButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_timeController","t":4,"rt":TimeController,"sn":"_timeController"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleAmount","t":4,"rt":$n[0].Single,"sn":"scaleAmount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleSpeed","t":4,"rt":$n[0].Single,"sn":"scaleSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"startPos","t":4,"rt":$n[1].Vector3,"sn":"startPos"},{"a":1,"n":"startScale","t":4,"rt":$n[1].Vector3,"sn":"startScale"}]}; }, $n);
    /*ThrobbingHand end.*/

    /*TimeController start.*/
    $m("TimeController", function () { return {"nested":[TimeController.ActiveHintType],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DisableHintDisplay","t":8,"sn":"DisableHintDisplay","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"OrientationCorrection","t":8,"sn":"OrientationCorrection","rt":$n[0].Void},{"a":1,"n":"Pause1","t":8,"sn":"Pause1","rt":$n[0].Void},{"a":1,"n":"Pause2","t":8,"sn":"Pause2","rt":$n[0].Void},{"a":1,"n":"Pause3","t":8,"sn":"Pause3","rt":$n[0].Void},{"a":1,"n":"Pause5","t":8,"sn":"Pause5","rt":$n[0].Void},{"a":1,"n":"Pause6","t":8,"sn":"Pause6","rt":$n[0].Void},{"a":1,"n":"Play","t":8,"sn":"Play","rt":$n[0].Void},{"a":2,"n":"PlayGame","t":8,"sn":"PlayGame","rt":$n[0].Void},{"a":1,"n":"Stop","t":8,"sn":"Stop","rt":$n[0].Void},{"a":1,"n":"_activeHint","t":4,"rt":TimeController.ActiveHintType,"sn":"_activeHint","box":function ($v) { return Bridge.box($v, TimeController.ActiveHintType, System.Enum.toStringFn(TimeController.ActiveHintType));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_dragAndDropArtillery1","t":4,"rt":$n[3].DragAndDropArtillery,"sn":"_dragAndDropArtillery1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_dragAndDropArtillery1g","t":4,"rt":$n[3].DragAndDropArtillery,"sn":"_dragAndDropArtillery1g"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_dragAndDropArtillery2","t":4,"rt":$n[3].DragAndDropArtillery,"sn":"_dragAndDropArtillery2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_dragAndDropArtillery2g","t":4,"rt":$n[3].DragAndDropArtillery,"sn":"_dragAndDropArtillery2g"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_dragAndDropArtillery3","t":4,"rt":$n[3].DragAndDropArtillery,"sn":"_dragAndDropArtillery3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_dragAndDropArtillery3g","t":4,"rt":$n[3].DragAndDropArtillery,"sn":"_dragAndDropArtillery3g"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_forcePortrait","t":4,"rt":ForcePortrait,"sn":"_forcePortrait"},{"a":1,"n":"_isPause1","t":4,"rt":$n[0].Boolean,"sn":"_isPause1","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isPause2","t":4,"rt":$n[0].Boolean,"sn":"_isPause2","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isPause3","t":4,"rt":$n[0].Boolean,"sn":"_isPause3","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isPause4","t":4,"rt":$n[0].Boolean,"sn":"_isPause4","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isPause5","t":4,"rt":$n[0].Boolean,"sn":"_isPause5","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isPause6","t":4,"rt":$n[0].Boolean,"sn":"_isPause6","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isShowsHints","t":4,"rt":$n[0].Boolean,"sn":"_isShowsHints","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pumping1","t":4,"rt":$n[1].GameObject,"sn":"_pumping1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pumping1g","t":4,"rt":$n[1].GameObject,"sn":"_pumping1g"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pumping2","t":4,"rt":$n[1].GameObject,"sn":"_pumping2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pumping2g","t":4,"rt":$n[1].GameObject,"sn":"_pumping2g"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_slidingHand1","t":4,"rt":RidingHand,"sn":"_slidingHand1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_slidingHand1g","t":4,"rt":RidingHand,"sn":"_slidingHand1g"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_slidingHand2","t":4,"rt":RidingHand,"sn":"_slidingHand2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_slidingHand2g","t":4,"rt":RidingHand,"sn":"_slidingHand2g"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_slidingHand3","t":4,"rt":RidingHand,"sn":"_slidingHand3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_slidingHand3g","t":4,"rt":RidingHand,"sn":"_slidingHand3g"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_timer","t":4,"rt":Timer,"sn":"_timer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_videoPlayer","t":4,"rt":$n[4].VideoPlayer,"sn":"_videoPlayer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_videoPlayer2","t":4,"rt":$n[4].VideoPlayer,"sn":"_videoPlayer2"}]}; }, $n);
    /*TimeController end.*/

    /*TimeController+ActiveHintType start.*/
    $m("TimeController.ActiveHintType", function () { return {"td":TimeController,"att":259,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Hint1","is":true,"t":4,"rt":TimeController.ActiveHintType,"sn":"Hint1","box":function ($v) { return Bridge.box($v, TimeController.ActiveHintType, System.Enum.toStringFn(TimeController.ActiveHintType));}},{"a":2,"n":"Hint2","is":true,"t":4,"rt":TimeController.ActiveHintType,"sn":"Hint2","box":function ($v) { return Bridge.box($v, TimeController.ActiveHintType, System.Enum.toStringFn(TimeController.ActiveHintType));}},{"a":2,"n":"Hint3","is":true,"t":4,"rt":TimeController.ActiveHintType,"sn":"Hint3","box":function ($v) { return Bridge.box($v, TimeController.ActiveHintType, System.Enum.toStringFn(TimeController.ActiveHintType));}},{"a":2,"n":"Hint4","is":true,"t":4,"rt":TimeController.ActiveHintType,"sn":"Hint4","box":function ($v) { return Bridge.box($v, TimeController.ActiveHintType, System.Enum.toStringFn(TimeController.ActiveHintType));}},{"a":2,"n":"Hint5","is":true,"t":4,"rt":TimeController.ActiveHintType,"sn":"Hint5","box":function ($v) { return Bridge.box($v, TimeController.ActiveHintType, System.Enum.toStringFn(TimeController.ActiveHintType));}},{"a":2,"n":"Hint6","is":true,"t":4,"rt":TimeController.ActiveHintType,"sn":"Hint6","box":function ($v) { return Bridge.box($v, TimeController.ActiveHintType, System.Enum.toStringFn(TimeController.ActiveHintType));}},{"a":2,"n":"None","is":true,"t":4,"rt":TimeController.ActiveHintType,"sn":"None","box":function ($v) { return Bridge.box($v, TimeController.ActiveHintType, System.Enum.toStringFn(TimeController.ActiveHintType));}}]}; }, $n);
    /*TimeController+ActiveHintType end.*/

    /*Timer start.*/
    $m("Timer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartTimer","t":8,"sn":"StartTimer","rt":$n[0].Void},{"a":2,"n":"StopTimer","t":8,"sn":"StopTimer","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateTimerDisplay","t":8,"sn":"UpdateTimerDisplay","rt":$n[0].Void},{"a":2,"n":"TimeElapsed","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_TimeElapsed","t":8,"rt":$n[0].Single,"fg":"TimeElapsed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"TimeElapsed"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_icons","t":4,"rt":$n[1].GameObject,"sn":"_icons"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_icons2","t":4,"rt":$n[1].GameObject,"sn":"_icons2"},{"a":1,"n":"_isPausing1","t":4,"rt":$n[0].Boolean,"sn":"_isPausing1","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isPausing2","t":4,"rt":$n[0].Boolean,"sn":"_isPausing2","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isPausing3","t":4,"rt":$n[0].Boolean,"sn":"_isPausing3","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isPausing4","t":4,"rt":$n[0].Boolean,"sn":"_isPausing4","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isPausing5","t":4,"rt":$n[0].Boolean,"sn":"_isPausing5","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isPausing6","t":4,"rt":$n[0].Boolean,"sn":"_isPausing6","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isRunning","t":4,"rt":$n[0].Boolean,"sn":"_isRunning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_timeElapsed","t":4,"rt":$n[0].Single,"sn":"_timeElapsed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"StopVideo1","t":2,"ad":{"a":2,"n":"add_StopVideo1","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addStopVideo1","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_StopVideo1","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeStopVideo1","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"StopVideo2","t":2,"ad":{"a":2,"n":"add_StopVideo2","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addStopVideo2","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_StopVideo2","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeStopVideo2","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"StopVideo3","t":2,"ad":{"a":2,"n":"add_StopVideo3","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addStopVideo3","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_StopVideo3","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeStopVideo3","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"StopVideo4","t":2,"ad":{"a":2,"n":"add_StopVideo4","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addStopVideo4","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_StopVideo4","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeStopVideo4","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"StopVideo5","t":2,"ad":{"a":2,"n":"add_StopVideo5","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addStopVideo5","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_StopVideo5","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeStopVideo5","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"StopVideo6","t":2,"ad":{"a":2,"n":"add_StopVideo6","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addStopVideo6","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_StopVideo6","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeStopVideo6","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*Timer end.*/

    /*DragAndDrop.DragAndDropArtillery start.*/
    $m("DragAndDrop.DragAndDropArtillery", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Activate","t":8,"sn":"Activate","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"FindSpawnLocation","t":8,"sn":"FindSpawnLocation","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"OnBeginDrag","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnBeginDrag","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"OnEndDrag","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnEndDrag","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":1,"n":"TurnHands","t":8,"sn":"TurnHands","rt":$n[0].Void},{"a":1,"n":"Hits","t":4,"rt":System.Array.type(UnityEngine.RaycastHit),"sn":"Hits","ro":true},{"a":1,"n":"_isActive","t":4,"rt":$n[0].Boolean,"sn":"_isActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isReplay","t":4,"rt":$n[0].Boolean,"sn":"_isReplay","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_mainCamera","t":4,"rt":$n[1].Camera,"sn":"_mainCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_ridingHands","t":4,"rt":System.Array.type(RidingHand),"sn":"_ridingHands"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spawnLocation","t":4,"rt":Spawnlocation,"sn":"_spawnLocation"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spawnLocation2","t":4,"rt":Spawnlocation,"sn":"_spawnLocation2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spritArtillery","t":4,"rt":$n[2].Image,"sn":"_spritArtillery"},{"a":1,"n":"_spritArtilleryInstance","t":4,"rt":$n[2].Image,"sn":"_spritArtilleryInstance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_timeController","t":4,"rt":TimeController,"sn":"_timeController"}]}; }, $n);
    /*DragAndDrop.DragAndDropArtillery end.*/

    }});
