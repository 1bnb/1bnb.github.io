const A="data:audio/mpeg;base64,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C2eRGyGVjIspdUFKV/rHXVaJiy67bJ57TPI5jzqVXay6xjK1m7ML1vo0y1YKTp/055HCSQQSUnAY9QMsiqoBrlUS2k/4eLbl6XfX8l+KCfyUs8cNWlgMqAMTmFZVXnCgvGXLufuT2FTMb5YXQaWxxKzKKlFMajJM11lIlg5oEc5BOxJIqQEh0jSSBMKHT0CBTHDwyBaOuTGyYKHIEwkkMW5wVyAEWCIOYDOag/lXzURGYRlVBwMJg4l8fe3RzV0mdVolMUX4AtJIHeVXqe6RmOfnWJ4QnQYAAAAx4lgRIVWJgiv2nQAp0sGLIGggqkzNIoVAVtQ1MJQ2VjarPpiTgqUuKjOwNfIiIGBY8zthJb1M9gKGaGCBg0qv5YODC70G//uSxCUA3RGRHQy8fQMSrKLhh5tYqiFlk0XNTSe1ZDLWgsDa85TXVltzRSTGb+XIT03HrShbwhA1BqmdFG4KYIUYwNAcyfCoFNJ4r0AaQF8TWMjiPJyiycowmh0MbcfZ5tqZQaHmIdSGwl2JWPFYEJXk1lELppUzmXGCnY7vS4cY1U6pnj5fesFYmqabbMD14oWB5uFDi2lbZItvvxViXVYGs1H2Bz2ZT5HkM9gw85+4e5igECAAlTw8MDBzKmJOU16C1bi2SGzPUAq1ZZDT3JpFkkASEpOq3HobCgS5RcotsWeMZC3zjX+YvEkMvZeKDr2JzJFOSjyXJXqnsWmTqi2MRVKmaSUnCbxClVGN0yVaW0nJOScpUvqNP5bElExVocISEuUOZtQk7jiRKgFdJqMIf0NqVSlUMGiujNxzKryK2aEnjqZoMVui2LAI04BEkucS2ZNmdmAEFdiQCRzmkZzm12Oqq1pw6t8zk5XYloSDUedwaiIFdKoAAGAMAoPDYwHwcB8FBgjUuSEiGQ8Hi5A2eaQoiEQh4ugNsy8UJEqkmv/7ksQUg9MFZsREsHyIAAA0gAAABMVOB8ZDxGgNuajKSaU4bH6iVWTghaSlYch5IBXOF6Qpj0HQpE4rnBfKQnjUCw0jQVzgvlITxMFQnkA7OE5SKZSLxTSJ2IUJOkQmwTyypLDJllssssoOWWWOf/9jWWWAwQIHLLAdFX/5KrlVdNNNNVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=";export{A as default};
