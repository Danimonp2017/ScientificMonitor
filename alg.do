clear all

// Datos coyunturales - extraer datos desde 1995*
	// * Arbitrario

// Argentina

pause on
set timeout1 5
set timeout2 5

global paises ARG BOL CHL COL CRI CUB ECU SLV GTM MEX PAN PRY PER PRI URY VEN

foreach p in $paises {
	wbopendata, language(en - English) country(`p';) topics() indicator() clear
	
		keep if indicatorcode=="NY.GDP.MKTP.KD" | indicatorcode=="NY.GDP.MKTP.CD" | indicatorcode=="GB.XPD.RSDV.GD.ZS"
		
	reshape long yr, i(indicatorcode) j(year)

	br countrycode indicatorname year yr if year>=1995
	
	pause Type *end* when done
}

/*

wbopendata, language(en - English) country(VEN;) topics() indicator() clear
	
	keep if indicatorcode=="NY.GDP.MKTP.KD" | indicatorcode=="NY.GDP.MKTP.CD"
	
reshape long yr, i(indicatorcode) j(year)

br countrycode indicatorname year yr if year>=1995

pause Type *end* when done
