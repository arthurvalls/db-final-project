('SELECT * FROM Pokemon WHERE id IN (SELECT evolvedId from Pokemon, Evolution where  evolvingId = ? and id = ?);', [evolvingId, evolvedId])

/* Deverão ser especificadas e executadas pelo menos 5 consultas em SQL, sendo: 
(i) pelo menos 3 das consultas devem contemplar operação(ões) de junção(ações), devendo ter pelo menos uma junção externa (em alguma consulta) e deve-se utilizar mais de uma junção em pelo menos duas das consultas;
(ii) pelo menos 2 das consultas devem fazer uso de uma ou mais funções de agregação, sendo que pelo menos uma delas também deve realizar agrupamento;
(iii) pelo menos 2 das consultas devem fazer uso de subconsultas aninhadas. */