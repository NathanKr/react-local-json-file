<h2>Motivation</h2>
Given a react app without a server but with some dynamic data. E.g. an app that show daily tv programs
Question is how to implement this

<h2>Options</h2>
<table >
  <tr>
    <th>Description</th>
    <th>Pros</th>
    <th>Cons</th>
  </tr>
  <tr>
    <td>Data as part of component . Change it for every data change</td>
    <td>Easy</td>
    <td>You can not edit components easyly after build (may be its even not possible) and even if it is possible you might change also code</td>
  </tr>
  <tr>
    <td>Data as part of json file in public directory</td>
    <td>It make the task feasible using e.g. fetch and data is seperated from code</td>
    <td>need some code to handle it</td>
  </tr>
</table>