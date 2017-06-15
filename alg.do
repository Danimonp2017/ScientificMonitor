clear all

// Datos coyunturales - extraer datos desde 1995*
	// * Arbitrario

// Argentina

local intermedias datos/Stata/Intermedias
local finales			datos/Stata/Finales

pause on
set timeout1 10
set timeout2 10

global paises ARG BOL CHL COL CRI CUB ECU SLV GTM MEX PAN PRY PER PRI URY VEN /*Agregados: */ HIC LAC LCN LIC
/*
foreach p in $paises {
	wbopendata, language(en - English) country(`p';) topics() indicator() clear
	
		keep if indicatorcode=="NY.GDP.MKTP.KD" | indicatorcode=="NY.GDP.MKTP.CD" | indicatorcode=="GB.XPD.RSDV.GD.ZS" | indicatorcode=="IP.PAT.RESD" | indicatorcode=="IP.JRN.ARTC.SC" | indicatorcode=="SP.POP.TOTL"
		
	/*
	reshape long yr, i(indicatorcode) j(year)

	br countrycode indicatorname year yr if year>=1995
	
	pause Type *end* when done
	*/
	
	save `intermedias'/`p'.dta, replace
}
*/
clear

foreach p in $paises {
	append using `intermedias'/`p'.dta
}

rename (countryname countrycode iso2code region regioncode indicatorname indicatorcode) (nombre iso3_p iso2_p region iso3_r indicador c_indicador)

gen 		col="PIB__real__valores" if c_indicador=="NY.GDP.MKTP.KD"
replace col="PIB__nominal__valores" if c_indicador=="NY.GDP.MKTP.CD"
replace col="patentes" if c_indicador=="IP.PAT.RESD"
replace col="publicaciones" if c_indicador=="IP.JRN.ARTC.SC"
replace col="Gasto_I_D" if c_indicador=="GB.XPD.RSDV.GD.ZS"
replace col="poblacion" if c_indicador=="SP.POP.TOTL"

reshape long yr, i(nombre c_indicador) j(year)

egen coln = concat(col year), punct("__")

drop year col *indicador

reshape wide yr, i(nombre) j(coln) string

rename yr* *

gen id=""

save `finales'/consolidada.dta, replace

export excel using `finales'/consolidada.xlsx, replace first(var)

/*

wbopendata, language(en - English) country(VEN;) topics() indicator() clear
	
	keep if indicatorcode=="NY.GDP.MKTP.KD" | indicatorcode=="NY.GDP.MKTP.CD"
	
reshape long yr, i(indicatorcode) j(year)

br countrycode indicatorname year yr if year>=1995

pause Type *end* when done
