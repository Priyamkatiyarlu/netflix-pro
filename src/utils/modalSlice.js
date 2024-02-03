import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        showModal: false,
        modalData: null,
    },
    reducers: {
        addModal: (state) => {
            state.showModal = true;
        },
        removeModal: (state) => {
            state.showModal = false;
        },
        addModalData: (state,action)=>{
            state.modalData = action.payload;
        },
        removeModalData: (state) => {
            state.modalData = null;
        },
    },
});

export const { addModal, removeModal, addModalData, removeModalData } = modalSlice.actions;
export default modalSlice.reducer;
