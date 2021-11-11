import { GridColDef } from '@mui/x-data-grid';
import { Link } from '@mui/material';
//https://mui.com/api/data-grid/grid-col-def/

export const DataColumns: GridColDef[] = [
	{ field: 'name', headerName: 'Full name', width: 200 },
	{ field: 'gender', headerName: 'Gender', width: 100 },
	{ field: 'company', headerName: 'Company', width: 200 },
	{ field: 'email', headerName: 'Email', width: 300 },
	{ field: 'isActive', headerName: 'Active', type: 'boolean', width: 100 },
	{
		field: 'Profile',
		headerName: 'Profile',
		width: 300,
		renderCell: rowData => (
			<Link href={rowData.row.picture} target={'_blank'}>
				{rowData.field}
			</Link>
		),
	},
];

export default DataColumns;
