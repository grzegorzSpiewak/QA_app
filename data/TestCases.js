/* Heartbeat x2 test casses */
import HbTwoVideoStart from './test/heartbeat2Suite/VideoStart'
import HbTwoVideoPlay from './test/heartbeat2Suite/VideoPlay'
import HbTwoVideoPause from './test/heartbeat2Suite/VideoPause'
import HbTwoVideoSeek from './test/heartbeat2Suite/VideoSeek'
import HbTwoVideoComplete from './test/heartbeat2Suite/VideoComplete'
import HbTwoVideoStall from './test/heartbeat2Suite/VideoStall'
import HbTwoAdStart from './test/heartbeat2Suite/AdStart'
import HbTwoAdPlay from './test/heartbeat2Suite/AdPlay'
import HbTwoAdComplete from './test/heartbeat2Suite/AdComplete'
import HbTwoVideoStartLive from './test/heartbeat2Suite/VideoStartLive'
import HbTwoVideoPlayLive from './test/heartbeat2Suite/VideoPlayLive'
import HbTwoVideoPlayComplete from './test/heartbeat2Suite/VideoCompleteLive'
import Comscore from './test/comscore/Comscore'
/* Heartbeat Q3 test casses */
import HbQVideoStart from './test/heartbeatQ3Suite/VideoStart'
import HbQVideoPlay from './test/heartbeatQ3Suite/VideoPlay'
import HbQVideoPause from './test/heartbeatQ3Suite/VideoPause'
import HbQVideoSeek from './test/heartbeatQ3Suite/VideoSeek'
import HbQVideoComplete from './test/heartbeatQ3Suite/VideoComplete'
import HbQVideoStall from './test/heartbeatQ3Suite/VideoStall'
import HbQVideoAdStart from './test/heartbeatQ3Suite/AdStart'
import HbQVideoAdPlay from './test/heartbeatQ3Suite/AdPlay'
import HbQVideoAdComplete from './test/heartbeatQ3Suite/AdComplete'
import HbQVideoStartFx from './test/heartbeatQ3Suite/FxVideoStart'
import HbQVideoPlayFx from './test/heartbeatQ3Suite/FxVideoPlay'
import HbQVideoStartFng from './test/heartbeatQ3Suite/FngVideoStart'
import HbQVideoPlayFng from './test/heartbeatQ3Suite/FngVideoPlay'
import HbQVideoCompleteFng from './test/heartbeatQ3Suite/FngVideoComplete'
import HbQVideoStartFsGo from './test/heartbeatQ3Suite/FsGoVideoStart'
import HbQVideoPlayFsGo from './test/heartbeatQ3Suite/FsGoVideoPlay'
import HbQVideoCompleteFsGo from './test/heartbeatQ3Suite/FsGoVideoComplete'

const TestCases = {
  Heartbeat2VideoStart: HbTwoVideoStart,
  Heartbeat2VideoPlay: HbTwoVideoPlay,
  Heartbeat2VideoPause: HbTwoVideoPause,
  Heartbeat2VideoSeek: HbTwoVideoSeek,
  Heartbeat2VideoComplete: HbTwoVideoComplete,
  Heartbeat2VideoStall: HbTwoVideoStall,
  Heartbeat2AdStart: HbTwoAdStart,
  Heartbeat2AdPlay: HbTwoAdPlay,
  Heartbeat2AdComplete: HbTwoAdComplete,
  Heartbeat2VideoStartLive: HbTwoVideoStartLive,
  Heartbeat2VideoPlayLive: HbTwoVideoPlayLive,
  Heartbeat2VideoCompleteLive: HbTwoVideoPlayComplete,
  Heartbeat2Comscore: Comscore,
  HeartbeatQ3VideoStart: HbQVideoStart,
  HeartbeatQ3VideoPlay: HbQVideoPlay,
  HeartbeatQ3VideoPause: HbQVideoPause,
  HeartbeatQ3VideoSeek: HbQVideoSeek,
  HeartbeatQ3VideoComplete: HbQVideoComplete,
  HeartbeatQ3VideoStall: HbQVideoStall,
  HeartbeatQ3AdStart: HbQVideoAdStart,
  HeartbeatQ3AdPlay: HbQVideoAdPlay,
  HeartbeatQ3AdComplete: HbQVideoAdComplete,
  HeartbeatQ3VideoStartFx: HbQVideoStartFx,
  HeartbeatQ3VideoPlayFx: HbQVideoPlayFx,
  HeartbeatQ3VideoStartFng: HbQVideoStartFng,
  HeartbeatQ3VideoPlayFng: HbQVideoPlayFng,
  HeartbeatQ3VideoCompleteFng: HbQVideoPlayFng,
  HeartbeatQ3VideoStartFsGo: HbQVideoStartFsGo,
  HeartbeatQ3VideoPlayFsGo: HbQVideoPlayFsGo,
  HeartbeatQ3VideoCompleteFsGo: HbQVideoPlayFsGo,
  HeartbeatQ3Comscore: Comscore,
}

export default TestCases
