import React from "react";

const Details = () => {
  return (
    <div>
      <h1>Details</h1>
      <div>
        <h4>CardTable</h4>
        <hr />
        <dl class="row">
          <dt class="col-sm-2">@Html.DisplayNameFor(model => model.Img)</dt>
          <dd class="col-sm-10">@Html.DisplayFor(model => model.Img)</dd>
          <dt class="col-sm-2">@Html.DisplayNameFor(model => model.Nome)</dt>
          <dd class="col-sm-10">@Html.DisplayFor(model => model.Nome)</dd>
          <dt class="col-sm-2">
            @Html.DisplayNameFor(model => model.Categoria)
          </dt>
          <dd class="col-sm-10">
            @Html.DisplayFor(model => model.Categoria.Cor)
          </dd>
        </dl>
      </div>
      <div>
        <a asp-action="Edit" asp-route-id="@Model.Id">
          Edit
        </a>{" "}
        |<a asp-action="Index">Back to List</a>
      </div>
    </div>
  );
};

export default Details;
