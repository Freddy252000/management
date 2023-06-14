import * as React from "react";
// import Iconify from "src/components/iconify/Iconify";
import { Button, Container, Stack, Typography, Box, Modal, TextField } from "@mui/material";
import { DataGrid, GridDeleteIcon } from "@mui/x-data-grid";
import { Edit, Edit as EditIcon } from "@mui/icons-material";

import { useState } from "react";
import Popup from "../components/popup/Popup";
import Form from "../components/form/Form";
// import { UserListHead, UserListToolbar } from "../sections/@dashboard/user";

// import Scrollbar from "../components/scrollbar";
//  import Iconify from "src/components/iconify/Iconify";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  borderRadius: 2.5,
  boxShadow: 20,
  p: 4,

};



const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => (
      <>
        <Button
          gap="1rem"
          variant="outlined"
          color="primary"
          size="small"
          startIcon={<EditIcon />}
        // onClick={() => handleEdit(params.row.id)}
        />
        &nbsp;&nbsp;

        <Button
          variant="outlined"
          color="error"
          size="small"
          startIcon={<GridDeleteIcon />}
        // onClick={() => handleDelete(params.row.id)}
        />


      </>
    ),
  },
  // {
  //   field: "actions1",
  //   headerName: "Actions",
  //   width: 120,
  //   renderCell: (params) => (
  //     <Button
  //       variant="contained"
  //       color="secondary"
  //       size="small"
  //       startIcon={<GridDeleteIcon />}
  //       // onClick={() => handleDelete(params.row.id)}
  //     >
  //       Delete
  //     </Button>
  //   ),
  // },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const CategoriesPage = () => {
  const handleEdit = (id) => {
    // Handle the edit action for a specific row
    console.log(`Edit action for row with ID: ${id}`);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openPopup, setOpenPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can access the form field values using event.target
    const formData = new FormData(event.target);
    const categoryId = formData.get('categoryId');
    const categoryName = formData.get('categoryName');
    const categoryDescription = formData.get('categoryDescription');

    console.log('Category ID:', categoryId);
    console.log('Category Name:', categoryName);
    console.log('Category Description:', categoryDescription);

    // Add your logic to handle the form submission
  };


  return (
    <div>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Categories Page
          </Typography>
          <Button
            variant="contained"
            onClick={handleOpen}

          // startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Categorie
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h5" component="h2"  style={{ fontFamily: 'Times New Roman' }}>
              Product Add Category
              </Typography>
              <Typography id="modal-modal-description" variant="h8"  style={{ fontFamily: 'Times New Roman' }}>
              Create new product Category
              </Typography>
              <form onSubmit={handleSubmit}>
              <Box sx={{ mt: 2, mb: 2 }}>
            <TextField
              label="Category ID"
              fullWidth
              required
              // Add any necessary props for the Category ID field
            />
            </Box>
            <Box sx={{ mt: 2, mb: 2 }}>
            <TextField
              label="Category Name"
              fullWidth
              required
              // Add any necessary props for the Category Name field
            />
            </Box>
            <Box sx={{ mt: 2, mb: 2 }}>
            <TextField
              label="Category Description"
              fullWidth
              required
              // Add any necessary props for the Category Description field
            />
            </Box>
            <Button type="submit" variant="contained" color="primary">
              Add Categories
            </Button>
          </form>
            </Box>
          </Modal>


        </Stack>
        {/* <UserListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          /> */}

        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </Container>
      {/* <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <Form />
      </Popup> */}
    </div>
  );
};

export default CategoriesPage;
