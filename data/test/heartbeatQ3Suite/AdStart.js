const AdStart = {
  header: "Expected variables in this call",
  items: [
    {name: "s:event:type"},
    {name: "s:asset:type"},
    {name: "s:sc:tracking_server"},
    {name: "s:sc:rsid"},
    {name: "l:asset:ad_length"},
    {name: "s:asset:ad_id"},
    {name: "s:asset:pod_position"},
    {name: "s:meta:video.advertiser"},
    {name: "s:meta:video.adpodposition"},
    {name: "s:meta:video.adtitle"},
    {name: "s:meta:video.adpodinposition"},
    {name: "s:meta:video:adtype"},
  ],
  testName: "Heartbeat Q3 Ad Start",
  testDetails: "Search for call with s:event:type <b>start</b> and s:asset:type <b>ad</b>",
}

export default AdStart
