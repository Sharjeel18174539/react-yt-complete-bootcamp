function AddTodolist(){
    let list="Milk";
    let date="28-08-2024"
    return <div class="container ">
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
export default AddTodolist; 