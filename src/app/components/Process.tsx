import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import CustomCard from './CustomCard';
import packageicon from '../../../image/package.png'
import charticon from '../../../image/chart.png'
import calendericon from '../../../image/calender.png'
import { Paper } from '@mui/material';
type Props = {}



const Process = (props: Props) => {
    return (
        <Paper square id="start" sx={{ p: 10 }}>
            <Grid container spacing={4}>
                <Grid xs={12}>
                    <Typography variant='h3' gutterBottom sx={{ textAlign: 'center' }}>Làm thế nào nó hoạt động ?</Typography>
                    <Typography variant='body2' sx={{ textAlign: 'center', pb: 3 }}>Các doanh nghiệp thông thường quảng bá thương hiệu, sản phẩm <br /> và dịch vụ của họ bằng cách xác định đối tượng khách hàng.</Typography>
                </Grid>
                <Grid xs={12} md={4}>
                    <CustomCard title='Chọn gói dịch vụ' image={packageicon} content='Các doanh nghiệp phát triển bằng cách nhắm đến và điều chỉnh các chiến dịch quảng bá thông qua nghiên cứu mở rộ và hiểu biết về người tiêu dùng.'></CustomCard>
                </Grid>
                <Grid xs={12} md={4}>
                    <CustomCard title='Lên lịch hẹn' image={calendericon} content='Khi bạn có thông tin quan trọng cần truyền đạt cho nhóm của mình, việc sử dụng tin nhắn văn bản có thể là một cách tuyệt vời để thực hiện điều này.'></CustomCard>
                </Grid>
                <Grid xs={12} md={4}>
                    <CustomCard title='Phát triển cùng nhau' image={charticon} content='Việc sử dụng tin nhắn văn bản đôi khi có thể tạo ra ấn tượng không chân thành trong giao tiếp, nhưng nó cũng có thể mang lại nhiều lợi ích.'></CustomCard>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Process