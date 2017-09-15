const VideoPlay = {
  header: "Expected variables in this call",
  items: [
    {name: "s:event:type"},
    {name: "s:asset:type"},
    {name: "s:sc:tracking_server"},
    {name: "s:sc:rsid"},
    {name: "l:asset:length"},
    {name: "s:asset:video_id"},
    {name: "s:sp:player_name"},
    {name: "l:event:playhead"},
  ],
  testName: "Heartbeat 2x Video Live Play",
  testDetails: "Search for call with s:event:type <b>play</b> and s:asset:type <b>main</b>",
}

export default VideoPlay
