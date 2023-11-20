<template>
  <div id="notebook">
    <br />
    <h2>Geeks For Geeks</h2>
    <div class="verticalLines"></div>
    <ul class="listItemClass">
      <li>Courses</li>
      <li>Contribute</li>
      <li>Practice</li>
      <li>Internships</li>
      <li>Jobs</li>
      <li>Articles</li>
      <li>Profiles</li>
      <li>Placements</li>
      <li>Tutorials</li>
    </ul>
  </div>
</template>

<style scoped>
#notebook {
  width: 480px;
  height: 450px;
  margin: 0 auto;
}
h2 {
  color: green;
  text-align: center;
  letter-spacing: -2px;
}
.listItemClass {
  color: #858585;
  font-size: 21px;
  padding: 0;
  width: 500px;
  border: 2px solid #cecece;
}
.listItemClass li {
  list-style: none;
  border-bottom: 2px dotted #cecece;
  text-indent: 20px;
  height: auto;
  padding: 10px;
}
.listItemClass li:hover {
  background-color: #f5f5f5;
}
.verticalLines {
  width: 1px;
  float: left;
  height: 425px;
  margin-left: 35px;
  border-left: 1px solid green;
  border-right: 1px solid green;
}
</style>
