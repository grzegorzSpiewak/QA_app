const AdComplete = {
  header: "Expected variables in this call",
  items: [
    {name: "s:event:type"},
    {name: "s:asset:type"},
    {name: "s:sc:tracking_server"},
    {name: "s:sc:rsid"},
    {name: "l:asset:ad_length"},
    {name: "s:asset:ad_id"},
    {name: "s:asset:pod_position"},
  ],
  testName: "Heartbeat Q3 Ad Complete",
  testDetails: "Search for call with s:event:type <b>complete</b> and s:asset:type <b>ad</b>",
}

export default AdComplete
