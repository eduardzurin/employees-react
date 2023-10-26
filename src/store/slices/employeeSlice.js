import { createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from "../../index.js";

export const employeeSlice = createSlice({
    name: "employees",
    initialState: {
        employeesList: [],
        success: false,
        loading: true,
    },

    reducers: {
        loadEmployees: (state) => {
            state.loading = true;
        },

        fetchEmployees: (state, action) => {
            state.employeesList = action.payload;
            state.loading = false;
        },

        fetchEmployeesError: async (state) => {
            state.employeesList = [];
            state.loading = false;
        },

        createEmployee: async (state, success) => {
            state.success = success.payload;
        },

        deleteEmployee: (state, action) => {
            state.success = action.payload

        },

        addEmployee: (state, action) => {
            state.success = action.payload
        },
        
        updateEmployee (state, action) {
            const newEmployees = state.employeesList;
            for (const index in newEmployees) {
              if (newEmployees[index].id === action.payload.id) {
                newEmployees[index].name = action.payload.name;
                newEmployees[index].title = action.payload.title;
                newEmployees[index].tribe = action.payload.tribe;
              }
            }
            state.loading = false;
        }
    }
})

export const { createEmployee, fetchEmployees, fetchEmployeesError, deleteEmployee, addEmployee, updateEmployee, loadEmployees} = employeeSlice.actions;

export default employeeSlice.reducer;