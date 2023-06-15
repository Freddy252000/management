import * as React from "react";
// import Iconify from "src/components/iconify/Iconify";
import { Button, Container, Stack, Typography, Box, Modal, TextField } from "@mui/material";
import { DataGrid, GridDeleteIcon } from "@mui/x-data-grid";
import { Edit, Edit as EditIcon } from "@mui/icons-material";

import { useState } from "react";
// import Popup from "../components/popup/Popup";

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
  { field: "id", headerName: "Category ID ", width: 100 },
  { field: "firstName", headerName: "Category Name", width: 230 },
  { field: "lastName", headerName: "Category Describe ", width: 400 },

  {
    field: "actions",
    headerName: "Actions",
    width: 150,
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
  { id: "C1", lastName: "Food", firstName: "Food description" },
  { id: "C2", lastName: "Lannister", firstName: "Cersei" },
  { id: "C3", lastName: "Lannister", firstName: "Jaime"},
  { id:"C4", lastName: "Stark", firstName: "Arya" },
  { id: "C5", lastName: "Targaryen", firstName: "Daenerys"},
  { id:"C6", lastName: "Melisandre", firstName: null},
  { id: "C7", lastName: "Clifford", firstName: "Ferrara"},
  { id:"C8", lastName: "Frances", firstName: "Rossini"},
  { id:"C9", lastName: "Roxie", firstName: "Harvey"},
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

    handleClose();

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
            New category
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h5" component="h2" style={{ fontFamily: 'Times New Roman' }}>
                Product Add Category
              </Typography>
              <Typography id="modal-modal-description" variant="h8" style={{ fontFamily: 'Times New Roman' }}>
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
    
    </div>
  );
};

export default CategoriesPage;
