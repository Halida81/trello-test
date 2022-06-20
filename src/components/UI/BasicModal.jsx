import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const saveHandler = () => {};
  console.log(title);
  return (
    <div >
     <Button onClick={handleOpen}>+</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography 
            id="modal-modal-title"
            variant="h6"
            component="h2"
          ></Typography>
          <p >{props.title}</p>
          <span>Description</span>
          <Button id="change">Change</Button>
          <br />
          <Input
            id="change"
            style={{ width: "300px" }}
            onChange={titleChangeHandler}
            value={title}
            placeholder="Добавить более подробное описание"
            onClick={handleOpen}
          />
          <br />
          {/* {open && <textarea></textarea>} */}
          <Button onClick={saveHandler}>Save</Button>
          <Button onClick={handleClose}>Cancel</Button>
          <p>{title}</p>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.titleOfColumn}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

// const BasicModal = () => {
//   return <div></div>;
// };
// export default BasicModal;
