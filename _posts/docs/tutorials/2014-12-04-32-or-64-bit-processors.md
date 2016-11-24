---
title: 32 or 64 Bit? Your Processor Explained
layout: post
categories: docs tutorials
---

64-bit and 32-bit refer to how addresses and memory are handled in different
instruction set architectures. For clarity, the terms '32-bit' and '64-bit'
have dual meanings. The first refers to the size of addressable chunks of
memory. Memory is organized in chunks, called words, that a processor can
handle at once. 32 and 64-bit systems respectively handle chunks of memory that
are 32 and 64 bits in size. The second meaning refers to the size of the
addresses used to catalog all of the addressable points in memory. In other
words, each word in memory has an address that the processor uses to find it.
32-bit systems use 32-bit-long addresses, and the same follows for 64-bit ones.
Note that it just so happens that these systems have the same address size and
word size. It's not necessarily the case. For instance, early PCs often had
8-bit words and 16-bit addresses.  

Most commercially available systems today come with 64-bit capable processors
and pre-installed 64-bit operating systems. 32-bit applications are compatible
with them because the 64-bit format is backwards-compatible. The space
addressable by 32 bits is a subset of what is addressed with 64, and the
processors are built to handle 32-bit chunks of memory. Simply put, if you have
a 64-bit compatible processor, run 64-bit software.  

One extra consideration is the operating system. Applications other than
drivers and similar software interface with the hardware through the operating
system. Therefore, it is important to consider the type of operating system
installed. 32-bit OSes can only handle 32-bit operations, but 64-bit ones can
properly use both.  

Altogether, none of this is likely to be an issue with machines from the past
few years. Lately, AMD and Intel have introduced different brand names and code
names for their processors, which can get confusing quite easily. In case
you're running older hardware, here's a list of a few 64-bit capable
processors.

<div class="col-md-6"> 
<table class="table"> 
  <thead>
    <tr>
      <th><strong>AMD</strong> (aka "x86-64", "AMD64", or "x64")</th>
    </tr>
  </thead>
  <tbody>
    <tr><td> Athlon 64 </td></tr>
    <tr><td> AMD Athlon 64 X2 </td></tr>
    <tr><td> AMD Athlon 64 FX </td></tr>
    <tr><td> AMD Athlon II (X2/X3/X4) </td></tr>
    <tr><td> AMD Opteron </td></tr>
    <tr><td> AMD Turion 64 </td></tr>
    <tr><td> AMD Turion 64 X2 </td></tr>
    <tr><td> AMD Sempron ("Palermo" E6 stepping and all "Manila" models) </td></tr>
    <tr><td> AMD Phenom (X2/X3/X4) </td></tr>
    <tr><td> AMD Phenom II (X2/X3/X4) </td></tr>
  </tbody>
</table>
</div>

<div class="col-md-6">  
<table class="table"> 
  <thead>
    <tr>
      <th><strong>Intel</strong> (aka "IA-32e", "EM64T", or "Intel 64"</th>
    </tr>
  </thead>
  <tbody>
    <tr><td> Netburst family </td></tr>
    <tr><td> some Celeron D's: LGA 775 "Prescott" models </td></tr>
    <tr><td> some Pentium 4's: "Prescott 2M," "Irwindale" "Cedar Mill" </td></tr>
    <tr><td> Pentium D </td></tr>
    <tr><td> Pentium Extreme Edition </td></tr>
    <tr><td> Intel Core </td></tr>
    <tr><td> Xeon: Core 2, Dual Core, Celeron </td></tr>
    <tr><td> Nehalem: Core i3, i5, i7, Intel Atom </td></tr>
  </tbody>
</table>
</div>
