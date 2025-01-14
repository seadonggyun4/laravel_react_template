import styled from "styled-components";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";

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
                                <VehicleTypeLabel htmlFor={type} isChecked={selectedType === type}>
                                    {type}
                                </VehicleTypeLabel>
                            </div>
                        ))}
                    </VehicleTypeSelecter>
                </DataBox>
                <SearchButton onClick={handleSearch}>차량 검색하기</SearchButton>
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
`;

const DataBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;
`

// StyledDatePicker
const StyledDatePicker = styled(DatePicker)`
    padding: 1rem;
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
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: #fff;
`;

const VehicleTypeLabel = styled.label<{ isChecked: boolean }>`
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    background-color: ${(props) => (props.isChecked ? "var(--secondary-color)" : "var(--disabled-color)")};
    color: ${(props) => (props.isChecked ? "#ffffff" : "#000000")};
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--border-secondary-color);
    }
`;

const VehicleTypeRadio = styled.input`
    display: none;
`;

// SearchButton
const SearchButton = styled.button`
    padding: 1rem 2rem;
    background-color: var(--primary-color);
    height: 100%;
    color: white;
    border-radius: 30px;
    transition: .3s ease-in-out;

    &:hover {
        background-color: var(--secondary-color);
    }
`;
