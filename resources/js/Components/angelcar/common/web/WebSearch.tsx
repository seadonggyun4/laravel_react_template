import styled from "styled-components";
import React, { useState, forwardRef } from "react";
import ReactDatePicker, { DatePickerProps } from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import '../../../../../css/library/datePicker.css'
import { MOBILE_WIDTH } from "@/constants";
import { HiMiniMagnifyingGlassCircle } from "react-icons/hi2";


const WebSearchSection = () => {
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([new Date(), new Date()]);
    const [selectedType, setSelectedType] = useState("전체");
    const [startDate, endDate] = dateRange;

    const vehicleTypes = ["전체", "경차", "소형", "중형", "고급", "RV", "승합", "수입", "전기"];

    const handleDateChange = (dates: [Date | null, Date | null]) => {
        setDateRange(dates);
    };

    const handleSearch = () => {
        console.log("Search parameters:", {
            startDate,
            endDate,
            selectedType,
        });
    };

    return (
        <SearchSection>
            <SearchBox>
                <DataBox>
                    <StyledDatePicker
                        selected={startDate}
                        onChange={handleDateChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        monthsShown={3}
                        dateFormat="yyyy년 MM월 dd일 (eee) HH:mm"
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={30} // 30분 단위 설정
                        timeCaption="시간" // 한국어 시간 캡션
                        locale={ko}
                        placeholderText="날짜와 시간을 선택하세요"
                    />
                    <VehicleTypeSelecter>
                        {vehicleTypes.map((type) => (
                            <div key={type}>
                                <VehicleTypeRadio
                                    type="radio"
                                    name="vehicleType"
                                    id={type}
                                    value={type}
                                    checked={selectedType === type}
                                    onChange={() => setSelectedType(type)}
                                />
                                <VehicleTypeLabel htmlFor={type} $isChecked={selectedType === type}>
                                    {type}
                                </VehicleTypeLabel>
                            </div>
                        ))}
                    </VehicleTypeSelecter>
                </DataBox>
                <SearchButton onClick={handleSearch}>
                    차량 검색하기
                    <HiMiniMagnifyingGlassCircle/>
                </SearchButton>
            </SearchBox>
        </SearchSection>
    );
};

export default WebSearchSection;

const SearchSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    background-color: var(--primary-bg-color);
    color: white;
`;

const SearchBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: var(--section-width);

    @media (max-width: ${MOBILE_WIDTH}px) {
        flex-direction: column;
        justify-content: flex-start;
        row-gap: 20px;
        width: 100%;
    }
`;

const DataBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 50rem;

    @media (max-width: ${MOBILE_WIDTH}px) {
        width: 100%;
    }
`

// StyledDatePicker
const StyledDatePicker = styled(
    forwardRef<ReactDatePicker, DatePickerProps>((props, ref) => (
        <ReactDatePicker {...props} ref={ref} />
    ))
)<DatePickerProps>`
    padding: var(--section-s-padding);
    width: 100%;
    border: 2px solid var(--primary-color);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    font-size: 0.9rem;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;

    &:hover {
        border-color: var(--secondary-color);
    }
`;

// VehicleTypeSelecter
const VehicleTypeSelecter = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    padding: 1rem;
    border: 2px solid #ffffff;
    border-bottom-left-radius: var(--card-border-radius);
    border-bottom-right-radius: var(--card-border-radius);
    background-color: #fff;
`;

const VehicleTypeLabel = styled.label<{ $isChecked: boolean }>`
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: var(--button-border-radius);
    background-color: ${(props) => (props.$isChecked ? "var(--secondary-color)" : "var(--disabled-color)")};
    color: ${(props) => (props.$isChecked ? "#ffffff" : "#000000")};
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${(props) => (props.$isChecked ? "var(--secondary-color)" : "var(--border-secondary-color)")};
    }
`;

const VehicleTypeRadio = styled.input`
    display: none;
`;

// SearchButton
const SearchButton = styled.button`
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding: 1rem 2rem;
    background: linear-gradient(90deg, rgba(0,161,229,1) 50%, rgba(3,217,243,1) 100%);
    height: 100%;
    color: white;
    border-radius: var(--button-border-radius);
    transition: .3s ease-in-out;
    font-size: 0.9rem;
    font-weight: bold;

    & > svg{
        font-size: 1.5rem;
    }

    &:hover {
        box-shadow: rgba(00, 161, 229, 0.85) 0px 5px 15px;
    }
`;
