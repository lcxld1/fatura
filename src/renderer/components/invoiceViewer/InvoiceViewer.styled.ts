import styled from 'styled-components';

/**
 * Styles for Invoice Viewer - Styled Components
 */
const StyledInvoiceViewer = styled.div`
  padding: 16px;
  min-height: 150vw;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .logo-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 48px;

    .logo {
      height: 100px;
      width: 15%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-height: 100%;
        max-width: 100%;
        object-fit: contain;
      }
    }

    .invoice-no {
      h2,
      h3 {
        margin: 0;
        padding: 5px 10px;

        span {
          color: #6c757d;
        }
      }
    }
  }

  .seller-buyer-delivery {
    display: flex;
    justify-content: space-between;
    margin-bottom: 48px;

    div {
      min-width: 100px;
      max-width: 25%;
    }

    .buyer {
      /* Fixes small overflow on print */
      padding-right: 10px;
    }
  }

  .items {
    .items-header,
    .item {
      width: 100%;
      display: flex;
      align-items: center;
      text-align: center;
      padding: 10px 0;

      div {
        flex: 0 0 1;
      }

      .no {
        width: 5%;
      }

      .description {
        width: 35%;
        text-align: left;
      }

      .units {
        width: 7%;
      }

      .qty {
        width: 8%;
      }

      .price {
        width: 10%;
      }

      .tax {
        width: 5%;
      }

      .price-w-tax {
        width: 15%;
      }

      .total {
        width: 15%;
      }
    }

    .items-header {
      border-top: 2px solid black;
      border-bottom: 2px solid black;
    }

    .items-body {
      border-bottom: 1px solid black;
    }

    .item {
      border-bottom: 1px solid #6c757d;
    }
  }

  .calculations-container {
    display: flex;
    justify-content: flex-end;
    padding: 16px 0;
    flex-grow: 1;

    div {
      p {
        margin: 0;
        margin-bottom: 5px;
      }

      .amount-due {
        padding: 5px 0;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        margin-bottom: 0;
      }
    }

    .comment-box {
      flex-grow: 1;
      padding: 0 16px;
      margin-right: 100px;
    }

    .labels {
      p {
        text-align: right;
      }
    }

    .calculations {
      width: 15%;
      text-align: center;
    }
  }

  .signings {
    padding: 50px;
    display: flex;
    justify-content: space-between;

    p {
      border-top: 1px solid black;
      padding: 0 50px;
    }
  }

  .footer {
    border-top: 2px solid black;
    padding: 10px 0;
  }

  @media print {
    width: 1100px;
  }
`;

export default StyledInvoiceViewer;