document.addEventListener('DOMContentLoaded', () => {
    // 1. DU LIEU DIA LY (Tinh/Thanh pho -> Quan/Huyen -> Phuong/Xa)
    const locationData = {
        hanoi: {
            name: 'Hà Nội',
            districts: {
                'Ba Đình': ['Cống Vị', 'Điện Biên', 'Đội Cấn', 'Giảng Võ', 'Kim Mã', 'Liễu Giai', 'Ngọc Hà', 'Ngọc Khánh', 'Nguyễn Trung Trực', 'Phúc Xá', 'Quán Thánh', 'Thành Công', 'Trúc Bạch', 'Vĩnh Phúc'],
                'Hoàn Kiếm': ['Chương Dương', 'Cửa Đông', 'Cửa Nam', 'Đồng Xuân', 'Hàng Bạc', 'Hàng Bài', 'Hàng Bồ', 'Hàng Bông', 'Hàng Buồm', 'Hàng Đào', 'Hàng Gai', 'Hàng Mã', 'Hàng Trống', 'Lý Thái Tổ', 'Phan Chu Trinh', 'Phúc Tân', 'Trần Hưng Đạo', 'Tràng Tiền'],
                'Đống Đa': ['Cát Linh', 'Hàng Bột', 'Khâm Thiên', 'Khương Thượng', 'Kim Liên', 'Láng Hạ', 'Láng Thượng', 'Nam Đồng', 'Ngã Tư Sở', 'Ô Chợ Dừa', 'Phương Liên', 'Phương Mai', 'Quang Trung', 'Quốc Tử Giám', 'Thịnh Quang', 'Thổ Quan', 'Trung Liệt', 'Trung Phụng', 'Trung Tự', 'Văn Chương', 'Văn Miếu'],
                'Cầu Giấy': ['Dịch Vọng', 'Dịch Vọng Hậu', 'Mai Dịch', 'Nghĩa Đô', 'Nghĩa Tân', 'Quan Hoa', 'Trung Hòa', 'Yên Hòa'],
                'Hai Bà Trưng': ['Bách Khoa', 'Bạch Đằng', 'Bạch Mai', 'Cầu Dền', 'Đống Mác', 'Đồng Nhân', 'Đồng Tâm', 'Lê Đại Hành', 'Minh Khai', 'Nguyễn Du', 'Phạm Đình Hổ', 'Phố Huế', 'Quỳnh Lôi', 'Quỳnh Mai', 'Thanh Lương', 'Thanh Nhàn', 'Trương Định', 'Vĩnh Tuy'],
                'Thanh Xuân': ['Hạ Đình', 'Khương Đình', 'Khương Mai', 'Khương Trung', 'Kim Giang', 'Nhân Chính', 'Phương Liệt', 'Thanh Xuân Bắc', 'Thanh Xuân Nam', 'Thanh Xuân Trung', 'Thượng Đình'],
                'Hà Đông': ['Biên Giang', 'Đồng Mai', 'Dương Nội', 'Hà Cầu', 'Kiến Hưng', 'La Khê', 'Mộ Lao', 'Nguyễn Trãi', 'Phú La', 'Phú Lãm', 'Phú Lương', 'Phúc La', 'Quang Trung', 'Vạn Phúc', 'Văn Quán', 'Yên Nghĩa', 'Yết Kiêu'],
                'Nam Từ Liêm': ['Cầu Diễn', 'Đại Mỗ', 'Mễ Trì', 'Mỹ Đình 1', 'Mỹ Đình 2', 'Phú Đô', 'Phương Canh', 'Tây Mỗ', 'Trung Văn', 'Xuân Phương'],
                'Bắc Từ Liêm': ['Cổ Nhuế 1', 'Cổ Nhuế 2', 'Đông Ngạc', 'Đức Thắng', 'Liên Mạc', 'Minh Khai', 'Phú Diễn', 'Phúc Diễn', 'Tây Tựu', 'Thụy Phương', 'Thượng Cát', 'Xuân Đỉnh', 'Xuân Tảo'],
                'Long Biên': ['Bồ Đề', 'Cự Khối', 'Đức Giang', 'Gia Thụy', 'Giang Biên', 'Long Biên', 'Ngọc Lâm', 'Ngọc Thụy', 'Phúc Đồng', 'Phúc Lợi', 'Sài Đồng', 'Thạch Bàn', 'Thượng Thanh', 'Việt Hưng'],
                'Thanh Trì': ['Thị trấn Văn Điển', 'Đại Áng', 'Đông Mỹ', 'Duyên Hà', 'Hữu Hòa', 'Liên Ninh', 'Ngọc Hồi', 'Ngũ Hiệp', 'Tả Thanh Oai', 'Tam Hiệp', 'Tân Triều', 'Thanh Liệt', 'Tứ Hiệp', 'Vạn Phúc', 'Vĩnh Quỳnh', 'Yên Mỹ']
            }
        },
        danang: {
            name: 'Đà Nẵng',
            districts: {
                'Hải Châu': ['Hải Châu 1', 'Hải Châu 2', 'Thạch Thang', 'Thanh Bình', 'Thuận Phước', 'Hòa Thuận Tây', 'Hòa Thuận Đông', 'Nam Dương', 'Bình Hiên', 'Bình Thuận', 'Hòa Cường Bắc', 'Hòa Cường Nam'],
                'Thanh Khê': ['Tam Thuận', 'Thanh Khê Tây', 'Thanh Khê Đông', 'Xuân Hà', 'Tân Chính', 'Chính Gián', 'Vĩnh Trung', 'Thạc Gián', 'An Khê', 'Hòa Khê'],
                'Sơn Trà': ['Thọ Quang', 'Nại Hiên Đông', 'Mân Thái', 'An Hải Bắc', 'Phước Mỹ', 'An Hải Tây', 'An Hải Đông'],
                'Ngũ Hành Sơn': ['Mỹ An', 'Khuê Mỹ', 'Hòa Quý', 'Hòa Hải'],
                'Liên Chiểu': ['Hòa Hiệp Bắc', 'Hòa Hiệp Nam', 'Hòa Khánh Bắc', 'Hòa Khánh Nam', 'Hòa Minh'],
                'Cẩm Lệ': ['Khuê Trung', 'Hòa Thọ Đông', 'Hòa Thọ Tây', 'Hòa An', 'Hòa Phát', 'Hòa Xuân'],
                'Hòa Vang': ['Hòa Bắc', 'Hòa Châu', 'Hòa Khương', 'Hòa Liên', 'Hòa Nhơn', 'Hòa Ninh', 'Hòa Phong', 'Hòa Phú', 'Hòa Phước', 'Hòa Sơn', 'Hòa Tiến']
            }
        },
        hcm: {
            name: 'TP. Hồ Chí Minh',
            districts: {
                'Quận 1': ['Bến Nghé', 'Bến Thành', 'Cầu Kho', 'Cầu Ông Lãnh', 'Cô Giang', 'Đa Kao', 'Nguyễn Cư Trinh', 'Nguyễn Thái Bình', 'Phạm Ngũ Lão', 'Tân Định'],
                'Quận 3': ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 4', 'Phường 5', 'Phường 9', 'Phường 10', 'Phường 11', 'Phường 12', 'Phường 13', 'Phường 14', 'Võ Thị Sáu'],
                'Quận 4': ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 4', 'Phường 6', 'Phường 8', 'Phường 9', 'Phường 10', 'Phường 13', 'Phường 14', 'Phường 15', 'Phường 16', 'Phường 18'],
                'Quận 5': ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 4', 'Phường 5', 'Phường 6', 'Phường 7', 'Phường 8', 'Phường 9', 'Phường 10', 'Phường 11', 'Phường 12', 'Phường 13', 'Phường 14'],
                'Quận 7': ['Tân Thuận Đông', 'Tân Thuận Tây', 'Tân Kiểng', 'Tân Hưng', 'Bình Thuận', 'Tân Quy', 'Phú Thuận', 'Tân Phú', 'Tân Phong', 'Phú Mỹ'],
                'Quận 10': ['Phường 1', 'Phường 2', 'Phường 4', 'Phường 5', 'Phường 6', 'Phường 7', 'Phường 8', 'Phường 9', 'Phường 10', 'Phường 11', 'Phường 12', 'Phường 13', 'Phường 14', 'Phường 15'],
                'Bình Thạnh': ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 5', 'Phường 6', 'Phường 7', 'Phường 11', 'Phường 12', 'Phường 13', 'Phường 14', 'Phường 15', 'Phường 17', 'Phường 19', 'Phường 21', 'Phường 22', 'Phường 24', 'Phường 25', 'Phường 26', 'Phường 27', 'Phường 28'],
                'Tân Bình': ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 4', 'Phường 5', 'Phường 6', 'Phường 7', 'Phường 8', 'Phường 9', 'Phường 10', 'Phường 11', 'Phường 12', 'Phường 13', 'Phường 14', 'Phường 15'],
                'Phú Nhuận': ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 4', 'Phường 5', 'Phường 7', 'Phường 8', 'Phường 9', 'Phường 10', 'Phường 11', 'Phường 13', 'Phường 15', 'Phường 17'],
                'Gò Vấp': ['Phường 1', 'Phường 3', 'Phường 4', 'Phường 5', 'Phường 6', 'Phường 7', 'Phường 8', 'Phường 9', 'Phường 10', 'Phường 11', 'Phường 12', 'Phường 13', 'Phường 14', 'Phường 15', 'Phường 16', 'Phường 17'],
                'TP. Thủ Đức': ['Bình Chiểu', 'Bình Thọ', 'Hiệp Bình Chánh', 'Hiệp Bình Phước', 'Linh Chiểu', 'Linh Đông', 'Linh Tây', 'Linh Trung', 'Linh Xuân', 'Tam Bình', 'Tam Phú', 'Trường Thọ', 'Thảo Điền', 'An Phú', 'Bình An', 'An Khánh', 'Thạnh Mỹ Lợi', 'Cát Lái', 'Phước Long A', 'Phước Long B', 'Tăng Nhơn Phú A', 'Tăng Nhơn Phú B']
            }
        }
    };

    // 2. CAC PHAN TU DOM
    const patientForm = document.getElementById('patientForm');
    const patientName = document.getElementById('patientName');
    const btnClearName = document.getElementById('btnClearName');
    const btnRefresh = document.getElementById('btnRefresh');
    const selectProvince = document.getElementById('province');
    const selectDistrict = document.getElementById('district');
    const selectWard = document.getElementById('ward');
    const selects = document.querySelectorAll('.select-wrap select');
    const fieldItems = document.querySelectorAll('.field-item');

    // 3. HAM TIEN ICH
    // Cap nhat trang thai placeholder va class has-value cho the select
    const updateSelectState = (sel) => {
        const wrap = sel.closest('.select-wrap');
        const hasVal = Boolean(sel.value && sel.value.trim());
        sel.classList.toggle('is-placeholder', !hasVal);
        if (wrap) {
            wrap.classList.toggle('has-value', hasVal);
        }
    };

    // Nap danh sach option vao the select
    const populateSelect = (sel, defaultText, items = []) => {
        sel.innerHTML = `<option value="" selected disabled hidden>${defaultText}</option>` +
            items.map(name => `<option value="${name}">${name}</option>`).join('');
        updateSelectState(sel);
    };

    // Kiem tra truong bat buoc (dua vao dau * hoac id gender)
    const isRequiredField = (input) => {
        return input.placeholder?.includes('*') || input.id === 'gender';
    };

    // Bat/tat trang thai bao loi va dong chu do
    const setFieldError = (item, hasError) => {
        const wrap = item.querySelector('.input-wrap, .select-wrap');
        const errorMsg = item.querySelector('.error-msg');
        if (errorMsg) errorMsg.style.display = hasError ? 'block' : 'none';
        if (wrap) wrap.classList.toggle('has-error', hasError);
    };

    // 4. KHOI TAO SELECT DROPDOWNS & NUT CLEAR (X)
    selects.forEach(sel => {
        sel.addEventListener('change', () => updateSelectState(sel));
        updateSelectState(sel);

        const wrap = sel.closest('.select-wrap');
        const btnClear = wrap?.querySelector('.btn-clear-select');
        if (btnClear) {
            const clearSelect = (e) => {
                e.preventDefault();
                e.stopPropagation();
                sel.value = '';
                sel.dispatchEvent(new Event('change'));
            };

            btnClear.addEventListener('mousedown', (e) => {
                e.preventDefault();
                e.stopPropagation();
            });

            btnClear.addEventListener('click', clearSelect);
        }
    });

    // Dropdown Tinh/Thanh pho lien hoan
    if (selectProvince && selectDistrict && selectWard) {
        // Khi chon Tinh/Thanh pho -> Nap Quan/Huyen tuong ung
        selectProvince.addEventListener('change', () => {
            const pData = locationData[selectProvince.value];
            populateSelect(selectDistrict, 'Quận/Huyện', pData ? Object.keys(pData.districts) : []);
            populateSelect(selectWard, 'Phường/Xã');
        });

        // Khi chon Quan/Huyen -> Nap Phuong/Xa tuong ung
        selectDistrict.addEventListener('change', () => {
            const pData = locationData[selectProvince.value];
            const wards = pData?.districts[selectDistrict.value] || [];
            populateSelect(selectWard, 'Phường/Xã', wards);
        });
    }

    // 5. NUT XOA NHANH TEN (NUT X)
    if (btnClearName && patientName) {
        btnClearName.addEventListener('click', () => {
            patientName.value = '';
            patientName.focus();
            patientName.dispatchEvent(new Event('input'));
        });
    }

    // 6. XU LY AN/HIEN THONG BAO LOI KHI NHAP LIEU
    fieldItems.forEach(item => {
        const input = item.querySelector('input, select');
        if (!input) return;

        const handleInput = () => {
            const isEmpty = !input.value.trim();
            if (!isEmpty) {
                setFieldError(item, false);
            } else if (isRequiredField(input)) {
                setFieldError(item, true);
            }
        };

        input.addEventListener('input', handleInput);
        input.addEventListener('change', handleInput);
    });

    // 7. NUT LAM MOI FORM (REFRESH)
    if (btnRefresh && patientForm) {
        btnRefresh.addEventListener('click', () => {
            patientForm.reset();
            populateSelect(selectDistrict, 'Quận/Huyện');
            populateSelect(selectWard, 'Phường/Xã');
            selects.forEach(updateSelectState);
            if (patientName) {
                patientName.value = '';
                patientName.dispatchEvent(new Event('input'));
            }
        });
    }

    // 8. CHUYEN SUB TABS (Them ca kham hien form, Thong tin nguoi benh de trong)
    const subTabItems = document.querySelectorAll('.sub-tab-item');
    const contentThemCaKham = document.getElementById('contentThemCaKham');
    const contentThongTinNguoiBenh = document.getElementById('contentThongTinNguoiBenh');

    subTabItems.forEach(tab => {
        tab.addEventListener('click', () => {
            subTabItems.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const isThemCaKham = tab.getAttribute('data-tab') === 'them-ca-kham';
            if (contentThemCaKham) contentThemCaKham.style.display = isThemCaKham ? 'block' : 'none';
            if (contentThongTinNguoiBenh) contentThongTinNguoiBenh.style.display = isThemCaKham ? 'none' : 'block';
        });
    });

    // 9. XU LY SUBMIT FORM
    if (patientForm) {
        patientForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let hasError = false;

            fieldItems.forEach(item => {
                const input = item.querySelector('input, select');
                if (input && isRequiredField(input) && !input.value.trim()) {
                    setFieldError(item, true);
                    hasError = true;
                }
            });

            if (hasError) {
                alert('Vui lòng điền đầy đủ các thông tin bắt buộc!');
                return;
            }

            alert('Lưu thông tin người bệnh thành công!');
        });
    }

    // 10. XU LY CO GIAN HAI COT (RESIZER KEO THA)
    const resizer = document.getElementById('resizer');
    const leftCol = document.getElementById('leftCol');
    const contentCard = document.querySelector('.content-card');

    if (resizer && leftCol && contentCard) {
        let isResizing = false;

        resizer.addEventListener('mousedown', () => {
            isResizing = true;
            document.body.style.cursor = 'col-resize';
            document.body.style.userSelect = 'none';
            resizer.classList.add('resizing');
        });

        document.addEventListener('mousemove', (e) => {
            if (!isResizing) return;

            const cardRect = contentCard.getBoundingClientRect();
            let newWidth = e.clientX - cardRect.left;

            // Gioi han chieu rong toi thieu va toi da cho cot trai
            const minWidth = 360;
            const maxWidth = cardRect.width - 80;

            if (newWidth < minWidth) newWidth = minWidth;
            if (newWidth > maxWidth) newWidth = maxWidth;

            leftCol.style.width = `${newWidth}px`;
        });

        document.addEventListener('mouseup', () => {
            if (isResizing) {
                isResizing = false;
                document.body.style.cursor = '';
                document.body.style.userSelect = '';
                resizer.classList.remove('resizing');
            }
        });
    }
});
