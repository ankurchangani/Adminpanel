$(document).ready(function () {
    const ctx = document.getElementById('chart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            datasets: [{
                label: 'Fully Rounded',
                data: [12, 19, 15, 5, 4, 8, 10],
                borderRadius: 30,
                borderSkipped: false,
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    display: false,
                    grid: {
                        display: false
                    },
                    border: {
                        display: false,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
            },
        },
    });

    const ctx1 = document.getElementById('chart-3');

    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Apr', 'Jul', 'Oct'],
            datasets: [{
                label: 'Fully Rounded',
                data: [12, 7, 15, 20],
                backgroundColor: "#86e255",
                borderWidth: 0,
                borderRadius: 30,
                borderSkipped: false,
            }, {
                label: 'Fully Rounded',
                data: [10, 4, 13, 15],
                backgroundColor: "#e9faf4",
                borderWidth: 0,
                borderRadius: 30,
                borderSkipped: false,
            }],
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    display: false,
                    grid: {
                        display: false
                    },
                    border: {
                        display: false,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
            },
        },
    });

    const ctx2 = document.getElementById('chart-5');

    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Dataset',
                    data: [10, 12, 10, 15, 8, 3, 19, 23, 18, 17, 22, 0],
                    borderColor: "#7679ff",
                    backgroundColor: "#c6c6ff",
                    fill: true,
                    stepped: true,
                },
            ],
        },
        options: {
            aspectRatio: 1/0.6,
            plugins: {
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
            },
        },
    });

    const ctxEcommerce = document.getElementById('ecommerce-chart');

    new Chart(ctxEcommerce, {
        type: 'bar',
        data: {
            labels: ['Electronics', 'Clothing', 'Home & Garden', 'Beauty', 'Toys', 'Sports'],
            datasets: [
                {
                    label: 'Sales in Units',
                    data: [200, 150, 300, 120, 250, 100],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 206, 86, 0.7)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Allow canvas to resize freely
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Sales Volume'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Product Categories'
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                tooltip: {
                    enabled: true,
                }
            }
        }
    });

    const ctx3 = document.getElementById('chart-8');

    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [10, 12, 10, 15, 8, 3, 19, 23, 18, 17, 22, 0],
                    borderColor: "red",
                    backgroundColor: 'yellow',
                    borderRadius: 20,
                },
                {
                    label: 'Dataset 2',
                    data: [-10, -12, -10, -15, -8, -3, -19, -23, -18, -17, -22, -0],
                    borderColor: 'blue',
                    backgroundColor: 'green',
                    borderRadius: 20,
                },
            ],
        },
        options: {
            scales: {
                x: {
                    display: false,
                    grid: {
                        display: false
                    }
                },
                y: {
                    display: false,
                    grid: {
                        display: false
                    },
                    border: {
                        display: false,
                    },
                },
            },
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                    position: 'top',
                },
                tooltips: {
                    enabled: false
                },
            },
        },
    });



    var options = {
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }],
        yaxis: {
            show: false,
            lines: {
                show: false,
            },
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        chart: {
            height: '100%',
            type: 'area',
            toolbar: {
                show: false
            }
        },

        dataLabels: {
            enabled: false,
        },
        xaxis: {
            display: true,
            // type: 'datetime',
            categories: ["A1", "A2", "A3", "A4", "A5", "A6", "A7"],
            show: true,
            lines: {
                show: false,
                display: false,
            },
            labels: {
                show: true,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: true,
            },
            tooltip: {
                enabled: false,
            },
        },

        grid: {
            xaxis: {
                lines: {
                    show: false,
                    display: false,
                },

            },

            yaxis: {
                show: false,
                labels: {
                    show: false,
                },
                lines: {
                    show: false
                }
            },
        },
    };
    var chart = new ApexCharts(document.querySelector("#apex-1"), options);
    chart.render();




    var options1 = {
        series: [85],  // Updated series value for different data representation
        chart: {
            type: 'radialBar',
            offsetY: -20,
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                track: {
                    background: "#f0f0f0",
                    strokeWidth: '97%',
                    margin: 5,
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        color: '#b2b2b2',
                        opacity: 0.8,
                        blur: 3
                    }
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: -2,
                        fontSize: '24px',
                        color: '#333', // Text color for readability
                    }
                }
            }
        },
        grid: {
            padding: {
                top: -10
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.5,
                gradientToColors: ['#4CAF50', '#FF9800'], // Updated gradient colors
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 0.8,
                stops: [0, 50, 100] // Smooth gradient transition
            },
        },
        labels: ['Performance Score'], // Updated label text for context
    };
    
    var chart1 = new ApexCharts(document.querySelector("#apex-2"), options1);
    chart1.render();
    





    var options2 = {
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        yaxis: {
            show: false,
            lines: {
                show: false,
            },
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        chart: {
            height: 250,
            type: 'line',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            },
        },
        xaxis: {
            // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            show: false,
            lines: {
                show: false,
                display: false,
            },
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: true,
            },
            tooltip: {
                enabled: false,
            },
        },
        grid: {
            xaxis: {
                lines: {
                    show: false,
                    display: false,
                },

            },

            yaxis: {
                show: false,
                labels: {
                    show: false,
                },
                lines: {
                    show: false
                }
            },
        },

    };

    var chart2 = new ApexCharts(document.querySelector("#apex-3"), options2);
    chart2.render();


    var options3 = {
        chart: {
            type: 'bar',
            height: '100%',
            width: '100%',
            toolbar: { show: false },
        },
        series: [{
            name: 'Earnings',
            data: [2500, 4000, 3200, 2800, 3900, 4300]
        }],
        colors: ['#1A73E8', '#34A853', '#FBBC05', '#EA4335', '#A142F4', '#FF6D01'], // Color variety for bars
        plotOptions: {
            bar: {
                borderRadius: 4,
                distributed: true, // Different color per bar
                horizontal: false,
            }
        },
        dataLabels: { enabled: false },
        xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June'],
            labels: {
                style: {
                    colors: ['#333'],
                    fontSize: '14px',
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: ['#333'],
                    fontSize: '14px',
                }
            },
            title: { text: 'Earnings ($)' }
        },
        tooltip: {
            theme: 'light',
            y: {
                formatter: function (val) {
                    return "$" + val + "K";
                }
            }
        }
    };

    var chart3 = new ApexCharts(document.querySelector("#apex-4"), options3);
    chart3.render();
});