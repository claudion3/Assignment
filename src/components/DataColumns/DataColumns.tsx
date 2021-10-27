import { GridColDef } from '@mui/x-data-grid';
//https://mui.com/api/data-grid/grid-col-def/

export const DataColumns: GridColDef[] = [
	{ field: 'name', headerName: 'Full name', width: 200 },
	{ field: 'gender', headerName: 'Gender', width: 100 },
	{ field: 'company', headerName: 'Company', width: 200 },
	{ field: 'email', headerName: 'Email', width: 300 },
	{ field: 'isActive', headerName: 'Active', type: 'boolean', width: 100 },
	{ field: 'picture', headerName: 'Picture', width: 300 },
];

export default DataColumns;
