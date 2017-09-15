const VideoPause = {
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
  testName: "Heartbeat Q3 Video Pause",
  testDetails: "Search for call with s:event:type <b>pause</b> and s:asset:type <b>main</b>",
}

export default VideoPause
