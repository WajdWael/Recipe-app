import styled from "styled-components";

export const Container = styled.div`
    padding: 0 16px;
    margin: 0 auto;
    width: 100%;
    /* xsm */
    @media (min-width: 576px) {
        width: 540px;
    }
    /* sm */
    @media (min-width: 768px) {
        width: 720px;
    }
    /* md */
    @media (min-width: 992px) {
        width: 960px;
    }
    /* lg */
    @media (min-width: 1200px) {
        width: 1140px;
    }
`