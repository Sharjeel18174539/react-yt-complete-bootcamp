function AddTodolist2(){
    let list="Go To College";
    let date="29-08-2024";
    return <div class="container">
  <div class="row kg-row">
    <div class="col-6">
      {list}
    </div>
    <div class="col-4">
      {date}
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-danger kg-button">Delete</button>
    </div>
  </div>
</div>
}
export default AddTodolist2; 